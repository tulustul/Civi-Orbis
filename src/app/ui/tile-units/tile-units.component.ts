import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Tile } from "src/app/api/tile.interface";
import { MapUi } from "../map-ui";

@Component({
  selector: "app-tile-units",
  templateUrl: "./tile-units.component.html",
  styleUrls: ["./tile-units.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileUnitsComponent implements OnInit, OnDestroy {
  @Input() tile: Tile;

  private ngUnsubscribe = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef, private mapUi: MapUi) {}

  ngOnInit(): void {
    this.mapUi.selectedUnit$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get selectedUnit() {
    return this.mapUi.selectedUnit;
  }
}
