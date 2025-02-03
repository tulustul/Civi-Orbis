import { Component, input, output } from "@angular/core";

import { Option } from "../option.interface";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.scss"],
  standalone: false,
})
export class RadioComponent {
  options = input.required<Option[]>();

  value = input.required<any>();

  changed = output<any>();
}
