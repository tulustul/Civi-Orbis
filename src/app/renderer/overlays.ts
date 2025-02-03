import { Graphics } from "pixi.js";

import { drawClosedHex, getTileCoords, drawHex } from "./utils";
import { MapUi } from "../ui/map-ui";
import { Tile } from "../api/tile.interface";
import { TileWrapperContainer, TileContainer } from "./tile-container";
import { Camera } from "./camera";
import { GameState } from "../api/state";
import { GameApi } from "../api";
import { takeUntil } from "rxjs/operators";
import { Container } from "pixi.js";

export class OverlaysRenderer {
  wrapperContainer = new TileWrapperContainer();

  tilesContainer!: TileContainer;

  hoveredTileGraphics = new Graphics();

  selectedTileGraphics = new Graphics();

  highlightedTilesGraphics = new Graphics();

  constructor(
    public container: Container,
    private game: GameApi,
    private camera: Camera,
    mapUi: MapUi,
  ) {
    this.tilesContainer = new TileContainer(this.camera.tileBoundingBox);

    this.game.init$.subscribe((state) => {
      this.build(state);

      state.tilesExplored$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((tiles) => this.reveal(tiles));
    });

    this.container.addChild(this.hoveredTileGraphics);
    this.container.addChild(this.selectedTileGraphics);
    this.container.addChild(this.wrapperContainer);
    this.wrapperContainer.addChild(this.tilesContainer);

    this.buildHoveredTileGraphics();
    this.buildSelectedTileGraphics();

    mapUi.hoveredTile$.subscribe((tile) =>
      this.displayAtTile(this.hoveredTileGraphics, tile),
    );

    mapUi.selectedTile$.subscribe((tile) => {
      this.displayAtTile(this.selectedTileGraphics, tile);
    });

    mapUi.highlightedTiles$.subscribe((tiles) => {
      this.buildHighlightedTiles(tiles);
    });
  }

  build(state: GameState) {
    this.wrapperContainer.bindToMap(state.map);
    this.tilesContainer.bindToMap(state.map);
  }

  private displayAtTile(obj: Container, tile: Tile | null) {
    if (tile) {
      const [x, y] = getTileCoords(tile);
      obj.position.x = x;
      obj.position.y = y;
      obj.visible = true;
    } else {
      obj.visible = false;
    }
  }

  buildHoveredTileGraphics() {
    this.hoveredTileGraphics.setStrokeStyle({
      width: 0.02,
      color: 0xffffff,
      alpha: 0.5,
    });
    drawClosedHex(this.hoveredTileGraphics);
    this.hoveredTileGraphics.fill({ color: 0xffffff, alpha: 0.1 });
  }

  buildSelectedTileGraphics() {
    this.selectedTileGraphics.setStrokeStyle({
      width: 0.05,
      color: 0xff0000,
      alpha: 0.5,
    });
    drawClosedHex(this.selectedTileGraphics);
    this.selectedTileGraphics.fill({ color: 0xffffff, alpha: 0.1 });
  }

  buildHighlightedTiles(tiles: Set<Tile>) {
    this.highlightedTilesGraphics.clear();
    if (!tiles.size) {
      this.container.removeChild(this.highlightedTilesGraphics);
      return;
    }

    const g = this.highlightedTilesGraphics;
    for (const tile of tiles) {
      const [x, y] = getTileCoords(tile);

      drawHex(g, x, y);
      g.fill({ color: 0xffffff, alpha: 0.3 });
    }

    this.container.addChild(g);
  }

  reveal(tiles: Iterable<Tile>) {
    for (const tile of tiles) {
      const displayObjects = this.wrapperContainer.tilesMap.get(tile);
      if (displayObjects) {
        for (const obj of displayObjects) {
          obj.visible = true;
        }
      }
    }
  }

  clear() {
    this.highlightedTilesGraphics.clear();
    this.hoveredTileGraphics.visible = false;
    this.selectedTileGraphics.visible = false;
  }
}
