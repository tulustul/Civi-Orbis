import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  HostBinding,
  OnChanges,
} from "@angular/core";

import * as atlasIcons from "../../../assets/atlas-icons.json";

@Component({
    selector: "app-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IconComponent implements OnChanges {
  @HostBinding("class.tint")
  @Input()
  tint: string | undefined;

  @Input()
  name: string;

  @Input() scale = 1;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnChanges() {
    this.update();
  }

  get icons() {
    return atlasIcons
  }
  private update() {
    const el = this.elementRef.nativeElement;

    const frame = this.getFrame(this.name) || this.getFrame("undefined");

    el.style.backgroundPosition = `-${frame.x * this.scale}px -${
      frame.y * this.scale
    }px`;

    el.style.width = `${frame.w * this.scale}px`;
    el.style.height = `${frame.h * this.scale}px`;

    el.style.backgroundSize = `${this.icons.meta.size.w * this.scale}px ${
      this.icons.meta.size.h * this.scale
    }px`;

    if (this.tint) {
      el.style.backgroundColor = this.tint;
      el.style.webkitMaskPosition = el.style.backgroundPosition;
      el.style.webkitMaskSize = el.style.backgroundSize;
    } else {
      el.style.backgroundColor = "";
    }
  }

  private getFrame(name: string) {
    return this.icons.frames[name + ".png"]?.frame;
  }
}
