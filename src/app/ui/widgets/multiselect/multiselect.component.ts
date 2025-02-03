import { Component, input, output } from "@angular/core";

import { Option } from "../option.interface";

@Component({
  selector: "app-multiselect",
  templateUrl: "./multiselect.component.html",
  styleUrls: ["./multiselect.component.scss"],
  standalone: false,
})
export class MultiselectComponent {
  options = input.required<Option[]>();

  value = input.required<any[]>();

  changed = output<any[]>();

  toggleOption(option: Option) {
    const value = this.value();
    if (value.includes(option.value)) {
      const index = value.indexOf(option.value);
      const newValue = [...value];
      newValue.splice(index, 1);
      this.changed.emit(newValue);
    } else {
      this.changed.emit([...value, option.value]);
    }
  }
}
