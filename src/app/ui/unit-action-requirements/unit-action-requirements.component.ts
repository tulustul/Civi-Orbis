import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";

import {
  UnitAction,
  getPublicWorksRequired,
  getPublicWorksPerTurn,
} from "src/app/core/unit-actions";
import { UnitDetails } from "src/app/api/unit-details";

@Component({
  selector: "app-unit-action-requirements",
  templateUrl: "./unit-action-requirements.component.html",
  styleUrls: ["./unit-action-requirements.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitActionRequirementsComponent implements OnInit {
  @Input() unit: UnitDetails;

  @Input() action: UnitAction;

  failedRequirements: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    this.failedRequirements = await this.unit.getFailedActionRequirements(
      this.action,
    );
    this.cdr.markForCheck();
  }

  get publicWorksRequired() {
    return getPublicWorksRequired(this.action);
  }

  get publicWorksPerTurn() {
    return getPublicWorksPerTurn(this.action);
  }
}
