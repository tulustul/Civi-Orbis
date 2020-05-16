import * as PIXIE from "pixi.js";

import { TileCore } from "../core/tile";
import { TileWrapperContainer, TileContainer } from "./tile-container";
import { TerrainDrawer } from "./tile/terrain";
import { UnitsDrawer } from "./tile/unit";
import { YiedsDrawer } from "./tile/yields";
import { RiverDrawer } from "./tile/river";
import { CityDrawer } from "./tile/city";
import { AreaDrawer } from "./tile/area";
import { GameRenderer } from "./renderer";
import { Camera } from "./camera";
import { GameApi } from "../api";
import { GameState } from "../api/state";

export class MapDrawer {
  container = new TileWrapperContainer();

  waterContainer = new TileContainer(this.camera.tileBoundingBox);

  terrainContainer = new TileContainer(this.camera.tileBoundingBox);

  riverContainer = new TileContainer(this.camera.tileBoundingBox);

  cityContainer = new TileContainer(this.camera.tileBoundingBox);

  yieldsContainer = new TileContainer(this.camera.tileBoundingBox);

  unitsContainer = new TileContainer(this.camera.tileBoundingBox);

  overlaysContainer = new PIXIE.Container();

  terrainDrawer: TerrainDrawer;

  unitsDrawer: UnitsDrawer;

  yieldsDrawer: YiedsDrawer;

  riverDrawer: RiverDrawer;

  cityDrawer: CityDrawer;

  areaDrawer: AreaDrawer;

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

    // const tilesManager = this.game.tilesManager;
    // tilesManager.revealedTiles$.subscribe((tiles) => this.reveal(tiles));

    // tilesManager.resetTilesVisibility$.subscribe((tiles) => {
    //   this.hideAllTiles();
    //   this.reveal(tiles);
    // });

    this.game.init$.subscribe((state) => this.build(state));

    // Drawers must be created after init$ subscription?. Race condition will occur otherwise.
    this.terrainDrawer = new TerrainDrawer(
      this.renderer,
      this.terrainContainer,
      this.waterContainer,
    );

    this.unitsDrawer = new UnitsDrawer(this.game, this.unitsContainer);

    this.yieldsDrawer = new YiedsDrawer(
      this.game,
      this.renderer.mapUi,
      this.yieldsContainer,
    );

    this.riverDrawer = new RiverDrawer(this.game, this.riverContainer);

    this.cityDrawer = new CityDrawer(
      this.game,
      this.renderer,
      this.cityContainer,
    );

    this.areaDrawer = new AreaDrawer(this.game, this.overlaysContainer);
  }

  hideAllTiles() {
    for (const objects of this.container.tilesMap.values()) {
      for (const obj of objects) {
        obj.visible = false;
      }
    }
  }

  reveal(tiles: Iterable<TileCore>) {
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
      this.areaDrawer.clear();
    }
  }

  private build(gameState: GameState) {
    this.container.bindToMap(gameState.map);

    this.waterContainer.bindToMap(gameState.map);
    this.terrainContainer.bindToMap(gameState.map);
    this.cityContainer.bindToMap(gameState.map);
    this.yieldsContainer.bindToMap(gameState.map);
    this.riverContainer.bindToMap(gameState.map);
    this.unitsContainer.bindToMap(gameState.map);

    this.unitsDrawer.build();
    this.cityDrawer.build();
    this.areaDrawer.build();

    for (let y = 0; y < gameState.map.height; y++) {
      for (let x = 0; x < gameState.map.width; x++) {
        const tile = gameState.map.tiles[x][y];
        this.terrainDrawer.drawTile(tile);
        this.yieldsDrawer.drawTile(tile);
        this.riverDrawer.drawTile(tile);
      }
    }

    // if (this.game.humanPlayer) {
    //   this.hideAllTiles();
    //   this.reveal(this.game.humanPlayer.exploredTiles);
    // }
  }
}
