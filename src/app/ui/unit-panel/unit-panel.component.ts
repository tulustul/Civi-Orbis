import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  TemplateRef,
  ViewChild,
} from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { UnitAction, ACTIONS } from "src/app/core/unit-actions";
import { MapUi } from "../map-ui";
import { UnitDetails } from "src/app/api/unit-details";
import { UnitOrder } from "src/app/core/unit";
import { GameApi } from "src/app/api";
import { Unit } from "src/app/api/unit";
import { CombatSimulation } from "src/app/core/combat";
import { UnitComponent } from "../unit/unit.component";

@Component({
  selector: "app-unit-panel",
  templateUrl: "./unit-panel.component.html",
  styleUrls: ["./unit-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class UnitPanelComponent implements OnInit, OnDestroy {
  @ViewChild("unitComponent") unitComponent: UnitComponent | undefined;

  unit: UnitDetails | null = null;
  enemy: Unit | null = null;
  combatSimulation: CombatSimulation | null = null;

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
      .subscribe((unit) => {
        this.unit = unit;
        this.cdr.markForCheck();
        if (this.unitComponent) {
          this.unitComponent.update();
        }
      });

    this.mapUi.hoveredUnit$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (unit) => {
        this.enemy = null;
        this.combatSimulation = null;

        this.cdr.markForCheck();

        if (!unit || !this.unit) {
          return;
        }

        if (!this.game.state?.trackedPlayer.visibleTiles.has(unit.tile)) {
          return;
        }

        if (this.isEnemy(unit)) {
          this.enemy = unit;
          this.combatSimulation = await this.unit.simulateCombat(unit);
          this.cdr.markForCheck();
        }
      });

    this.game
      .state!.turn$.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async () => {
        if (this.unit) {
          await this.unit.refresh();
          this.mapUi.unitRangeArea.setTiles(await this.unit.getRange());
          this.cdr.markForCheck();
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getActionName(action: UnitAction) {
    return ACTIONS[action].name;
  }

  async setOrder(order: UnitOrder) {
    await this.unit?.setOrder(order);
    this.cdr.markForCheck();
  }

  destroy() {
    if (this.unit) {
      this.unit.disband();
      this.mapUi.selectUnit(null);
    }
  }

  isEnemy(unit: Unit | null) {
    return (
      this.unit &&
      unit &&
      this.unit.player.id !== unit.player.id &&
      unit.definition.strength
    );
  }

  get unitSimple() {
    if (!this.unit) {
      return null;
    }
    return this.game.state?.unitsMap.get(this.unit.id) ?? null;
  }
}
