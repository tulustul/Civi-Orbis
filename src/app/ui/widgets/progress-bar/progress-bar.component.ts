import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProgressBarComponent {
  progress = input.required<number>();

  nextProgress = input<number>();

  total = input.required<number>();

  get progressPercent() {
    return (this.progress() / this.total()) * 100;
  }

  get nextProgressPercent() {
    const nextProgress = this.nextProgress();
    if (!nextProgress) {
      return 0;
    }
    return (nextProgress / this.total()) * 100;
  }
}
