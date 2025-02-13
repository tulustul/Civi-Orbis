import { Component, OnInit, input } from "@angular/core";

import { CombatModifierType, CombatSimulationSide } from "src/app/core/combat";

@Component({
  selector: "app-combat-info-side",
  templateUrl: "./combat-info-side.component.html",
  styleUrls: ["./combat-info-side.component.scss"],
  standalone: false,
})
export class CombatInfoSideComponent implements OnInit {
  MODIFIER_LABELS: Record<CombatModifierType, string> = {
    [CombatModifierType.river]: "from river",
    [CombatModifierType.hills]: "from hills",
    [CombatModifierType.health]: "from health penalty",
    [CombatModifierType.forest]: "from forest",
    [CombatModifierType.flanks]: "from flanks",
  };

  label = input.required<string>();
  unitName = input.required<string>();
  simulationSide = input.required<CombatSimulationSide>();

  constructor() {}

  ngOnInit(): void {}
}
