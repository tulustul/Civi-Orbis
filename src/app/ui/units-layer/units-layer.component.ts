import {
  Component,
  OnInit,
  ViewChildren,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
} from "@angular/core";

import { Subject, merge } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { GameApi } from "src/app/api";
import { Camera } from "src/app/renderer/camera";
import { getTileCoords } from "src/app/renderer/utils";
import { UnitsStackComponent } from "./units-stack/units-stack.component";
import { Tile } from "src/app/api/tile.interface";
import { TILE_SIZE } from "src/app/renderer/constants";
import { UnitsLayerService } from "./units-layer.service";

@Component({
  selector: "app-units-layer",
  templateUrl: "./units-layer.component.html",
  styleUrls: ["./units-layer.component.scss"],
  providers: [UnitsLayerService],
})
export class UnitsLayerComponent implements OnInit, AfterViewInit {
  ngUnsubscribe = new Subject<void>();

  @ViewChildren(UnitsStackComponent)
  unitStacksComponents: UnitsStackComponent[];

  tiles: Set<Tile>;

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLElement>,
    private game: GameApi,
    private camera: Camera,
  ) {}

  ngOnInit(): void {
    if (!this.game.state) {
      return;
    }

    merge(
      this.game.state.unitSpawned$,
      this.game.state.unitDestroyed$,
      this.game.state.unitUpdated$,
      this.game.state.tilesShowed$,
      this.game.state.tilesShowedAdded$,
    )
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.updateTiles();
      });

    this.game.stop$.subscribe(() => {
      this.tiles = new Set();
      this.cdr.markForCheck();
    });

    this.updateTiles();
  }

  ngAfterViewInit() {
    this.camera.transform$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.updateTransforms());
  }

  updateTransforms() {
    const el = this.elementRef.nativeElement;
    let scale = this.camera.transform.scale;
    const box = this.camera.tileBoundingBox;

    let opacity = 1;
    if (scale < 30) {
      opacity = Math.max(0, 1 - (30 - scale) / 8);
    }
    el.style.opacity = opacity.toString();

    if (opacity === 0) {
      return;
    }

    for (const unitStackComponent of this.unitStacksComponents) {
      const tile = unitStackComponent.tile;
      const cityEl = unitStackComponent.elementRef.nativeElement;
      if (
        tile.x >= box.xStart &&
        tile.x <= box.xEnd &&
        tile.y >= box.yStart &&
        tile.y <= box.yEnd
      ) {
        cityEl.style.display = "flex";
      } else {
        cityEl.style.display = "none";
        continue;
      }

      const tileScale = scale / TILE_SIZE;
      let [x, y] = getTileCoords(unitStackComponent.tile);
      [x, y] = this.camera.canvasToScreen(x, y);
      cityEl.style.transform = `translate(${x}px, ${y}px) scale(${tileScale})`;
    }

    const unitScale = Math.pow(TILE_SIZE / scale, 0.5);
    el.style.setProperty("--unit-scale", unitScale.toString());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  updateTiles() {
    const player = this.game.state!.trackedPlayer;
    this.tiles = new Set();
    for (const unit of this.game.state!.units) {
      if (player.visibleTiles.has(unit.tile)) {
        this.tiles.add(unit.tile);
      }
    }
    this.cdr.markForCheck();

    setTimeout(() => this.updateTransforms());
  }

  trackByTileId(index: number, tile: Tile) {
    return tile.id;
  }
}
