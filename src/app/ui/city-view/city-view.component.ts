import { Component, OnInit, Input } from "@angular/core";

import { City } from "src/app/game/city";
import { UNITS_DEFINITIONS } from "src/app/data/units";
import { UIState } from "../ui-state";

@Component({
  selector: "app-city-view",
  templateUrl: "./city-view.component.html",
  styleUrls: ["./city-view.component.scss"],
})
export class CityViewComponent implements OnInit {
  UNITS = UNITS_DEFINITIONS;

  @Input() city: City;

  constructor(private uiState: UIState) {}

  ngOnInit(): void {}

  quit() {
    this.uiState.selectedCity$.next(null);
  }
}
