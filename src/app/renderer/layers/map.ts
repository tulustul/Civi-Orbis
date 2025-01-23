import { takeUntil } from "rxjs/operators";

import { TileWrapperContainer, TileContainer } from "../tile-container";
import { TerrainDrawer } from "../tile/terrain";
import { UnitsDrawer } from "../tile/unit";
import { YiedsDrawer } from "../tile/yields";
import { RiverDrawer } from "../tile/river";
import { CityDrawer } from "../tile/city";
import { GameRenderer } from "../renderer";
import { Camera } from "../camera";
import { GameApi } from "../../api";
import { GameState } from "../../api/state";
import { TrackedPlayer } from "../../api/tracked-player";
import { PoliticsDrawer } from "../politics";
import { Tile } from "../../api/tile.interface";
import { Container } from "pixi.js";

export class MapDrawer {
  wrapperContainer = new TileWrapperContainer();

  tilesContainer = new TileContainer(this.camera.tileBoundingBox);

  areasContainer = new TileContainer(this.camera.tileBoundingBox);

  overlaysContainer = new Container();

  tileContainers = new Map<Tile, Container>();

  terrainDrawer: TerrainDrawer;

  // unitsDrawer: UnitsDrawer;

  yieldsDrawer: YiedsDrawer;

  riverDrawer: RiverDrawer;

  cityDrawer: CityDrawer;

  politicsDrawer: PoliticsDrawer;

  constructor(
    private container: Container,
    private game: GameApi,
    private renderer: GameRenderer,
    private camera: Camera,
  ) {
    this.container.addChild(this.wrapperContainer);

    this.tilesContainer["interactiveChildren"] = false;
    this.areasContainer["interactiveChildren"] = false;

    this.wrapperContainer.addChild(this.tilesContainer);
    this.wrapperContainer.addChild(this.areasContainer);
    this.wrapperContainer.addChild(this.overlaysContainer);

    this.game.init$.subscribe((state) => {
      this.build(state);

      state.trackedPlayer$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((player) => this.limitViewToPlayer(player));

      state.tilesExplored$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((tiles) => this.reveal(tiles));

      state.tilesUpdated$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((tiles) => {
          for (const tile of tiles) {
            this.updateTile(tile);
          }
        });

      // cities
      state.citySpawned$
        .pipe(takeUntil(game.stop$))
        .subscribe((city) => this.updateTile(city.tile));

      state.cityUpdated$
        .pipe(takeUntil(game.stop$))
        .subscribe((city) => this.updateTile(city.tile));

      state.cityDestroyed$
        .pipe(takeUntil(game.stop$))
        .subscribe((city) => this.cityDrawer.destroy(city));
    });

    this.game.stop$.subscribe(() => this.clear());

    // Drawers must be created after init$ subscription?. Race condition will occur otherwise.
    this.terrainDrawer = new TerrainDrawer(this.renderer, this.game);

    // this.unitsDrawer = new UnitsDrawer(this.game, this.renderer, this.camera);

    this.yieldsDrawer = new YiedsDrawer(this.renderer.mapUi);

    this.riverDrawer = new RiverDrawer();

    this.cityDrawer = new CityDrawer(this.renderer);
  }

  hideAllTiles() {
    for (const objects of this.wrapperContainer.tilesMap.values()) {
      for (const obj of objects) {
        obj.visible = false;
      }
    }
  }

  reveal(tiles: Iterable<Tile>) {
    for (const tile of tiles) {
      const container = this.tileContainers.get(tile);
      if (container) {
        container.visible = true;
      }
      // const displayObjects = this.wrapperContainer.tilesMap.get(tile);
      // if (displayObjects) {
      //   for (const obj of displayObjects) {
      //     obj.visible = true;
      //   }
      // }
    }
  }

  clear() {
    this.tilesContainer.destroyAllChildren();
    if (this.terrainDrawer) {
      this.cityDrawer.clear();
      // this.unitsDrawer.clear();
      this.politicsDrawer.clear();
    }
  }

  private build(gameState: GameState) {
    this.politicsDrawer = new PoliticsDrawer(gameState, this.renderer);
    this.wrapperContainer.bindToMap(gameState.map);

    this.tilesContainer.bindToMap(gameState.map);
    this.areasContainer.bindToMap(gameState.map);

    for (let x = 0; x < gameState.map.width; x++) {
      for (let y = 0; y < gameState.map.height; y++) {
        const tile = gameState.map.tiles[x][y];
        const container = new Container();
        this.tileContainers.set(tile, container);
        this.tilesContainer.addChild(container, tile);
        this.drawTile(tile, container);
      }
    }

    // this.unitsDrawer.build(gameState);

    if (this.game.state?.trackedPlayer) {
      this.limitViewToPlayer(this.game.state?.trackedPlayer);
    }
  }

  private updateTile(tile: Tile) {
    const container = this.tileContainers.get(tile);
    if (container) {
      for (const child of container.children) {
        child.destroy();
      }
      this.drawTile(tile, container);
    }
  }

  private drawTile(tile: Tile, container: Container) {
    this.terrainDrawer.drawTile(tile, container);
    this.riverDrawer.drawTile(tile, container);
    this.yieldsDrawer.drawTile(tile, container);

    if (tile.city) {
      this.cityDrawer.draw(tile.city, container);
    }
  }

  private limitViewToPlayer(player: TrackedPlayer) {
    this.hideAllTiles();
    this.reveal(player.exploredTiles);
  }
}
