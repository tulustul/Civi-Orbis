import { Component, OnInit, Input } from "@angular/core";

import { Bonuses } from "src/app/core/bonus";

@Component({
    selector: "app-bonuses",
    templateUrl: "./bonuses.component.html",
    styleUrls: ["./bonuses.component.scss"],
    standalone: false
})
export class BonusesComponent implements OnInit {
  @Input() bonuses: Bonuses;

  constructor() {}

  ngOnInit(): void {}
}
