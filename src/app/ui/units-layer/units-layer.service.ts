import { Injectable, OnDestroy } from "@angular/core";
import { GameApi } from "src/app/api";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { UnitComponent } from "../unit/unit.component";
import { Unit } from "src/app/api/unit";

@Injectable()
export class UnitsLayerService implements OnDestroy {
  ngUnsubscribe = new Subject<void>();

  unitComponents = new Map<Unit, UnitComponent>();

  constructor(game: GameApi) {
    game
      .state!.unitUpdated$.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((unit) => {
        const unitComponent = this.unitComponents.get(unit);
        if (unitComponent) {
          unitComponent.update();
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addUnitComponent(unitComponent: UnitComponent) {
    this.unitComponents.set(unitComponent.unit(), unitComponent);
  }

  removeUnitComponent(unitComponent: UnitComponent) {
    this.unitComponents.delete(unitComponent.unit());
  }
}
