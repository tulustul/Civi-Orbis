import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  ViewChildren,
} from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Tile } from "src/app/api/tile.interface";
import { MapUi } from "../map-ui";
import { UnitComponent } from "../unit/unit.component";

@Component({
  selector: "app-tile-units",
  templateUrl: "./tile-units.component.html",
  styleUrls: ["./tile-units.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileUnitsComponent implements OnInit, OnDestroy {
  @Input() tile: Tile;

  @ViewChildren(UnitComponent) unitComponents: UnitComponent[] = [];

  private ngUnsubscribe = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef, private mapUi: MapUi) {}

  ngOnInit(): void {
    this.mapUi.selectedUnit$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((unit) => {
        this.cdr.markForCheck();
        const unitComponent = this.unitComponents.find(
          (c) => c.unit.id === unit?.id,
        );
        if (unitComponent) {
          unitComponent.update();
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get selectedUnit() {
    return this.mapUi.selectedUnit;
  }
}
