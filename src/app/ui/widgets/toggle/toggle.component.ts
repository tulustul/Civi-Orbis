import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  input,
  output,
  signal,
} from "@angular/core";

@Component({
  selector: "app-toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.scss"],
  standalone: false,
})
export class ToggleComponent implements OnInit {
  @HostBinding("class.enabled")
  value = input<boolean>(false);

  changed = output<boolean>();

  _value = this.value();

  @HostListener("click")
  toggle() {
    this._value = !this._value;
    this.changed.emit(this._value);
  }

  constructor() {}

  ngOnInit(): void {}
}
