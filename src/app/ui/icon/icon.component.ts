import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
} from "@angular/core";

import * as atlasIcons from "../../../assets/atlas-icons.json";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  private _name: string;

  private _scale = 1;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {}

  @Input() set name(name: string) {
    this._name = name;
    this.update();
  }
  get name() {
    return this._name;
  }

  @Input() set scale(scale: number) {
    this._scale = scale;
    if (this.name) {
      this.update();
    }
  }
  get scale() {
    return this._scale;
  }

  private update() {
    const el = this.elementRef.nativeElement;

    const frame = this.getFrame(this.name) || this.getFrame("undefined");

    el.style.backgroundPosition = `-${frame.x * this.scale}px -${
      frame.y * this.scale
    }px`;

    el.style.width = `${frame.w * this.scale}px`;
    el.style.height = `${frame.h * this.scale}px`;

    el.style.backgroundSize = `${atlasIcons.meta.size.w * this.scale}px ${
      atlasIcons.meta.size.h * this.scale
    }px`;
  }

  private getFrame(name: string) {
    return atlasIcons.frames[name + ".png"]?.frame;
  }
}
