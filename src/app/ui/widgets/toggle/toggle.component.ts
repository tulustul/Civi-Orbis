import {
  Component,
  OnInit,
  Input,
  HostBinding,
  HostListener,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
    selector: "app-toggle",
    templateUrl: "./toggle.component.html",
    styleUrls: ["./toggle.component.scss"],
    standalone: false
})
export class ToggleComponent implements OnInit {
  @HostBinding("class.enabled")
  @Input()
  value: boolean;

  @Output() changed = new EventEmitter<boolean>();

  @HostListener("click")
  toggle() {
    this.value = !this.value;
    this.changed.next(this.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
