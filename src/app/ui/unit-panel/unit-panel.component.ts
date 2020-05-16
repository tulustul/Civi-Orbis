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

import { Game } from "src/app/core/game";
import { UnitCore } from "src/app/core/unit";
import { UnitAction, ACTIONS } from "src/app/core/unit-actions";

@Component({
  selector: "app-unit-panel",
  templateUrl: "./unit-panel.component.html",
  styleUrls: ["./unit-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitPanelComponent implements OnInit, OnDestroy {
  unit: UnitCore | null = null;

  requirementsTemplates = new Map<UnitAction, TemplateRef<any>>();

  private ngUnsubscribe = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef, private game: Game) {}

  ngOnInit(): void {
    this.game.unitsManager.activeUnit$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((unit) => {
        this.unit = unit;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
  }

  get unit$() {
    return this.game.unitsManager;
  }

  getActionName(action: UnitAction) {
    return ACTIONS[action].name;
  }

  destroy() {
    if (this.unit) {
      this.game.unitsManager.destroy(this.unit);
    }
  }
}
