import * as PIXIE from "pixi.js";

import { takeUntil } from "rxjs/operators";

import { TileWrapperContainer, TileContainer } from "./tile-container";
import { TerrainDrawer } from "./tile/terrain";
import { UnitsDrawer } from "./tile/unit";
import { YiedsDrawer } from "./tile/yields";
import { RiverDrawer } from "./tile/river";
import { CityDrawer } from "./tile/city";
import { GameRenderer } from "./renderer";
import { Camera } from "./camera";
import { GameApi } from "../api";
import { GameState } from "../api/state";
import { TrackedPlayer } from "../api/tracked-player";
import { PoliticsDrawer } from "./politics";
import { Tile } from "../api/tile.interface";

export class MapDrawer {
  container = new TileWrapperContainer();

  waterContainer = new TileContainer(this.camera.tileBoundingBox);

  terrainContainer = new TileContainer(this.camera.tileBoundingBox);

  riverContainer = new TileContainer(this.camera.tileBoundingBox);

  cityContainer = new TileContainer(this.camera.tileBoundingBox);

  yieldsContainer = new TileContainer(this.camera.tileBoundingBox);

  unitsContainer = new TileContainer(this.camera.tileBoundingBox);

  areasContainer = new TileContainer(this.camera.tileBoundingBox);

  overlaysContainer = new PIXIE.Container();

  terrainDrawer: TerrainDrawer;

  unitsDrawer: UnitsDrawer;

  yieldsDrawer: YiedsDrawer;

  riverDrawer: RiverDrawer;

  cityDrawer: CityDrawer;

  politicsDrawer: PoliticsDrawer;

  constructor(
    private game: GameApi,
    private renderer: GameRenderer,
    private camera: Camera,
  ) {
    this.container.addChild(this.waterContainer);
    this.container.addChild(this.terrainContainer);
    this.container.addChild(this.riverContainer);
    this.container.addChild(this.cityContainer);
    this.container.addChild(this.yieldsContainer);
    this.container.addChild(this.unitsContainer);
    this.container.addChild(this.overlaysContainer);
    this.container.addChild(this.areasContainer);

    this.game.init$.subscribe((state) => {
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

      this.build(state);
    });

    this.game.stop$.subscribe(() => this.clear());

    // Drawers must be created after init$ subscription?. Race condition will occur otherwise.
    this.terrainDrawer = new TerrainDrawer(
      this.renderer,
      this.game,
      this.terrainContainer,
      this.waterContainer,
    );

    this.unitsDrawer = new UnitsDrawer(this.game, this.unitsContainer);

    this.yieldsDrawer = new YiedsDrawer(
      this.renderer.mapUi,
      this.yieldsContainer,
    );

    this.riverDrawer = new RiverDrawer(this.game, this.riverContainer);

    this.cityDrawer = new CityDrawer(
      this.game,
      this.renderer,
      this.cityContainer,
    );
  }

  hideAllTiles() {
    for (const objects of this.container.tilesMap.values()) {
      for (const obj of objects) {
        obj.visible = false;
      }
    }
  }

  reveal(tiles: Iterable<Tile>) {
    for (const tile of tiles) {
      const displayObjects = this.container.tilesMap.get(tile);
      if (displayObjects) {
        for (const obj of displayObjects) {
          obj.visible = true;
        }
      }
    }
  }

  clear() {
    if (this.terrainDrawer) {
      this.terrainDrawer.clear();
      this.riverDrawer.clear();
      this.cityDrawer.clear();
      this.unitsDrawer.clear();
      this.yieldsDrawer.clear();
      this.politicsDrawer.clear();
    }
  }

  private build(gameState: GameState) {
    this.politicsDrawer = new PoliticsDrawer(gameState, this.renderer);
    this.container.bindToMap(gameState.map);

    this.waterContainer.bindToMap(gameState.map);
    this.terrainContainer.bindToMap(gameState.map);
    this.cityContainer.bindToMap(gameState.map);
    this.yieldsContainer.bindToMap(gameState.map);
    this.riverContainer.bindToMap(gameState.map);
    this.unitsContainer.bindToMap(gameState.map);
    this.areasContainer.bindToMap(gameState.map);

    this.unitsDrawer.build();
    this.cityDrawer.build();

    for (let y = 0; y < gameState.map.height; y++) {
      for (let x = 0; x < gameState.map.width; x++) {
        const tile = gameState.map.tiles[x][y];
        this.drawTile(tile);
      }
    }

    if (this.game.state?.trackedPlayer) {
      this.limitViewToPlayer(this.game.state?.trackedPlayer);
    }
  }

  private updateTile(tile: Tile) {
    this.clearTile(tile);
    this.drawTile(tile);
  }

  private drawTile(tile: Tile) {
    this.terrainDrawer.drawTile(tile);
    this.yieldsDrawer.drawTile(tile);
    this.riverDrawer.drawTile(tile);
  }

  private clearTile(tile: Tile) {
    this.terrainDrawer.clearTile(tile);
    this.yieldsDrawer.clearTile(tile);
    this.riverContainer.clearTile(tile);
  }

  private limitViewToPlayer(player: TrackedPlayer) {
    this.hideAllTiles();
    this.reveal(player.exploredTiles);
  }
}
