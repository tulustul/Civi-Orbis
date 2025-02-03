import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  input,
} from "@angular/core";

import { UnitDetails } from "src/app/api/unit-details";
import {
  UnitAction,
  getPublicWorksPerTurn,
  getPublicWorksRequired,
} from "src/app/core/unit-actions";

@Component({
  selector: "app-unit-action-requirements",
  templateUrl: "./unit-action-requirements.component.html",
  styleUrls: ["./unit-action-requirements.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class UnitActionRequirementsComponent implements OnInit {
  unit = input.required<UnitDetails>();

  action = input.required<UnitAction>();

  failedRequirements: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    this.failedRequirements = await this.unit().getFailedActionRequirements(
      this.action(),
    );
    this.cdr.markForCheck();
  }

  get publicWorksRequired() {
    return getPublicWorksRequired(this.action());
  }

  get publicWorksPerTurn() {
    return getPublicWorksPerTurn(this.action());
  }
}
