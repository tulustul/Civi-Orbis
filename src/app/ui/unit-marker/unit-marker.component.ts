import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  Input,
  HostBinding,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Camera } from "src/app/renderer/camera";
import { UnitDetails } from "src/app/api/unit-details";
import { TILE_SIZE } from "src/app/renderer/constants";

@Component({
  selector: "app-unit-marker",
  templateUrl: "./unit-marker.component.html",
  styleUrls: ["./unit-marker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitMarkerComponent implements OnInit, OnDestroy {
  @Input() unit: UnitDetails;

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
    const [x, y] = [this.unit.tile.x, this.unit.tile.y];
    const [screenX, screenY] = this.camera.gameToScreen(x, y);
    const scale = this.camera.transform.scale / TILE_SIZE;
    return this.domSanitizer.bypassSecurityTrustStyle(
      `translate(${screenX}px, ${screenY}px) scale(${scale})`,
    );
  }

  @HostBinding("class.have-moves")
  get haveMoves() {
    return this.unit.actionPointsLeft > 0;
  }
}
