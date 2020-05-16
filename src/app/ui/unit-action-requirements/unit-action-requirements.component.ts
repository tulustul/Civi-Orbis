import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

import { UnitCore } from "src/app/core/unit";
import {
  UnitAction,
  ActionRequirement,
  ACTIONS,
  getPublicWorksRequired,
  getPublicWorksPerTurn,
} from "src/app/core/unit-actions";

@Component({
  selector: "app-unit-action-requirements",
  templateUrl: "./unit-action-requirements.component.html",
  styleUrls: ["./unit-action-requirements.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitActionRequirementsComponent implements OnInit {
  @Input() unit: UnitCore;

  @Input() action: UnitAction;

  failedRequirements: ActionRequirement[] = [];

  constructor() {}

  ngOnInit(): void {
    for (const r of ACTIONS[this.action].requirements) {
      if (!r.check(this.unit, this.action)) {
        this.failedRequirements.push(r);
      }
    }
  }

  get publicWorksRequired() {
    return getPublicWorksRequired(this.action);
  }

  get publicWorksPerTurn() {
    return getPublicWorksPerTurn(this.action);
  }
}
