import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  TemplateRef,
} from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { UnitAction, ACTIONS } from "src/app/core/unit-actions";
import { GameApi } from "src/app/api";
import { MapUi } from "../map-ui";
import { UnitDetails } from "src/app/api/unit-details";

@Component({
  selector: "app-unit-panel",
  templateUrl: "./unit-panel.component.html",
  styleUrls: ["./unit-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitPanelComponent implements OnInit, OnDestroy {
  unit: UnitDetails | null = null;

  requirementsTemplates = new Map<UnitAction, TemplateRef<any>>();

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private game: GameApi,
    private mapUi: MapUi,
  ) {}

  ngOnInit(): void {
    this.mapUi.selectedUnit$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (unit) => {
        this.unit = unit;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
  }

  getActionName(action: UnitAction) {
    return ACTIONS[action].name;
  }

  destroy() {
    if (this.unit) {
      this.unit.disband();
    }
  }
}
