import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-progress-bar",
    templateUrl: "./progress-bar.component.html",
    styleUrls: ["./progress-bar.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ProgressBarComponent {
  @Input() progress: number;

  @Input() nextProgress: number;

  @Input() total: number;

  get progressPercent() {
    return (this.progress / this.total) * 100;
  }

  get nextProgressPercent() {
    return (this.nextProgress / this.total) * 100;
  }
}
