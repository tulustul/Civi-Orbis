import { Tile } from "../game/tile";
import { Game } from "../game/game";
import { TileWrapperContainer, TileContainer } from "./tile-container";
import { TerrainDrawer } from "./tile/terrain";
import { UnitsDrawer } from "./tile/unit";
import { YiedsDrawer } from "./tile/yields";
import { RiverDrawer } from "./tile/river";
import { CityDrawer } from "./tile/city";
import { AreaDrawer } from "./tile/area";

export class MapDrawer {
  container = new TileWrapperContainer();

  terrainContainer = new TileContainer(this.game.camera.boundingBox);

  riverContainer = new TileContainer(this.game.camera.boundingBox);

  cityContainer = new TileContainer(this.game.camera.boundingBox);

  yieldsContainer = new TileContainer(this.game.camera.boundingBox);

  unitsContainer = new TileContainer(this.game.camera.boundingBox);

  overlaysContainer = new TileContainer(this.game.camera.boundingBox);

  terrainDrawer: TerrainDrawer | undefined;

  unitsDrawer: UnitsDrawer;

  yieldsDrawer: YiedsDrawer;

  riverDrawer: RiverDrawer;

  cityDrawer: CityDrawer;

  areaDrawer: AreaDrawer;

  constructor(private game: Game) {
    this.container.addChild(this.terrainContainer);
    this.container.addChild(this.riverContainer);
    this.container.addChild(this.cityContainer);
    this.container.addChild(this.yieldsContainer);
    this.container.addChild(this.unitsContainer);
    this.container.addChild(this.overlaysContainer);

    const tilesManager = this.game.tilesManager;
    tilesManager.revealedTiles$.subscribe((tiles) => this.reveal(tiles));

    tilesManager.resetTilesVisibility$.subscribe((tiles) => {
      this.hideAllTiles();
      this.reveal(tiles);
    });

    this.game.started$.subscribe(() => this.build());
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
      this.areaDrawer.clear();
    }
  }

  private build() {
    this.terrainDrawer = new TerrainDrawer(this.game, this.terrainContainer);
    this.unitsDrawer = new UnitsDrawer(this.game, this.unitsContainer);
    this.yieldsDrawer = new YiedsDrawer(this.yieldsContainer);
    this.riverDrawer = new RiverDrawer(this.game, this.riverContainer);
    this.cityDrawer = new CityDrawer(this.game, this.cityContainer);
    this.areaDrawer = new AreaDrawer(this.game, this.overlaysContainer);

    this.container.bindToMap(this.game.map);

    this.terrainContainer.bindToMap(this.game.map);
    this.cityContainer.bindToMap(this.game.map);
    this.yieldsContainer.bindToMap(this.game.map);
    this.riverContainer.bindToMap(this.game.map);
    this.unitsContainer.bindToMap(this.game.map);
    this.overlaysContainer.bindToMap(this.game.map);

    this.unitsDrawer.build();
    this.cityDrawer.build();
    this.areaDrawer.build();

    for (let x = 0; x < this.game.map.width; x++) {
      for (let y = 0; y < this.game.map.height; y++) {
        const tile = this.game.map.tiles[x][y];
        this.terrainDrawer.drawTile(tile);
        this.yieldsDrawer.drawTile(tile);
        this.riverDrawer.drawTile(tile);
      }
    }

    if (this.game.humanPlayer) {
      this.hideAllTiles();
      this.reveal(this.game.humanPlayer.exploredTiles);
    }
  }
}
