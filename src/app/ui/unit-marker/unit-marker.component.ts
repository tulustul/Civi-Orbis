import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  input,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { UnitDetails } from "src/app/api/unit-details";
import { Camera } from "src/app/renderer/camera";
import { TILE_SIZE } from "src/app/renderer/constants";

@Component({
  selector: "app-unit-marker",
  templateUrl: "./unit-marker.component.html",
  styleUrls: ["./unit-marker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class UnitMarkerComponent implements OnInit, OnDestroy {
  unit = input.required<UnitDetails>();

  ngUnsubscribe = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private domSanitizer: DomSanitizer,
    private camera: Camera,
  ) {}

  ngOnInit(): void {
    this.camera.transform$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  @HostBinding("style.transform")
  get transform() {
    if (!this.unit) {
      return "";
    }
    const unit = this.unit();
    const [x, y] = [unit.tile.x, unit.tile.y];
    const [screenX, screenY] = this.camera.gameToScreen(x, y);
    const scale = this.camera.transform.scale / TILE_SIZE;
    return this.domSanitizer.bypassSecurityTrustStyle(
      `translate(${screenX}px, ${screenY}px) scale(${scale})`,
    );
  }

  @HostBinding("class.have-moves")
  get haveMoves() {
    return this.unit().actionPointsLeft > 0;
  }
}
