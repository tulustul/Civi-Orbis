import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Game } from "src/app/game/game";
import { Unit } from "src/app/game/unit";
import { UnitAction, ACTIONS } from "src/app/game/unit-actions";

@Component({
  selector: "app-unit-panel",
  templateUrl: "./unit-panel.component.html",
  styleUrls: ["./unit-panel.component.scss"],
})
export class UnitPanelComponent implements OnInit, OnDestroy {
  unit: Unit | null = null;

  private ngUnsubscribe = new Subject<void>();

  constructor(private game: Game) {}

  ngOnInit(): void {
    this.game.unitsManager.activeUnit$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((unit) => (this.unit = unit));
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
}
