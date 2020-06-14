import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  HostListener,
  OnChanges,
  ElementRef,
  HostBinding,
  ChangeDetectorRef,
  Optional,
  OnDestroy,
} from "@angular/core";

import { Unit } from "src/app/api/unit";
import { MapUi } from "../map-ui";
import { UnitsLayerService } from "../units-layer/units-layer.service";

@Component({
  selector: "app-unit",
  templateUrl: "./unit.component.html",
  styleUrls: ["./unit.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitComponent implements OnInit, OnDestroy, OnChanges {
  @Input() unit: Unit;

  @Input()
  showMovesIndicator = true;

  constructor(
    private cdr: ChangeDetectorRef,
    public elementRef: ElementRef<HTMLElement>,
    private mapUi: MapUi,
    @Optional() private unitsLayerService: UnitsLayerService | null,
  ) {}

  ngOnInit() {
    if (this.unitsLayerService) {
      this.unitsLayerService.addUnitComponent(this);
    }
  }

  ngOnDestroy() {
    if (this.unitsLayerService) {
      this.unitsLayerService.removeUnitComponent(this);
    }
  }

  ngOnChanges() {
    this.updateClasses();
  }

  @HostListener("click")
  onClick() {
    this.mapUi.selectUnit(this.unit);
  }

  @HostListener("contextmenu", ["$event"])
  onContextMenu(event: Event) {
    event.preventDefault();
  }

  update() {
    this.updateClasses();
    this.cdr.markForCheck();
  }

  private updateClasses() {
    const el = this.elementRef.nativeElement;
    el.classList.remove("moves-all", "moves-some", "moves-none");
    el.classList.remove("health-healthy", "health-injured", "health-severe");
    el.classList.add(`moves-${this.movesStatus}`);
    el.classList.add(`health-${this.healthStatus}`);
  }

  get tint() {
    return this.unit.player.cssColor;
  }

  get unitBackground() {
    const strength = this.unit.definition.strength;
    const backgroundType = strength > 0 ? "military" : "civilian";
    return `unitBackground-${backgroundType}`;
  }

  get movesStatus() {
    if (this.unit.actionPointsLeft === this.unit.definition.actionPoints) {
      return "all";
    }

    if (this.unit.actionPointsLeft === 0) {
      return "none";
    }

    return "some";
  }

  get healthStatus() {
    if (this.unit.health >= 70) {
      return "healthy";
    }

    if (this.unit.health >= 35) {
      return "injured";
    }

    return "severe";
  }

  get isDamaged() {
    return this.unit.health < 100;
  }
}
