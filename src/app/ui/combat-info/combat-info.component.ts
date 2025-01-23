import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

import { UnitDetails } from "src/app/api/unit-details";
import { Unit } from "src/app/api/unit";
import { CombatSimulation } from "src/app/core/combat";

@Component({
    selector: "app-combat-info",
    templateUrl: "./combat-info.component.html",
    styleUrls: ["./combat-info.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CombatInfoComponent implements OnInit {
  @Input() attacker: UnitDetails;

  @Input() defender: Unit;

  @Input() simulation: CombatSimulation;

  constructor() {}

  ngOnInit(): void {}

  get ratio() {
    return (
      this.simulation.attacker.strength / this.simulation.defender.strength
    );
  }

  get resultClass(): string {
    const ratio = this.ratio;
    if (ratio > 0.8 && ratio < 1.2) {
      return "even";
    }
    if (ratio > 1.2) {
      return "victory";
    }
    return "defeat";
  }

  get result(): string {
    const ratio = this.ratio;
    if (ratio > 0.8 && ratio < 1.2) {
      return "even";
    }
    if (ratio > 1) {
      if (ratio > 2) {
        return "decisive victory";
      }
      if (ratio > 1.5) {
        return "major victory";
      }
      return "minor victory";
    }
    if (ratio < 0.4) {
      return "decisive defeat";
    }
    if (ratio < 0.7) {
      return "major defeat";
    }
    return "minor defeat";
  }
}
