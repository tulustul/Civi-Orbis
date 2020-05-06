import {
  Directive,
  Input,
  TemplateRef,
  HostListener,
  ElementRef,
} from "@angular/core";
import {
  Overlay,
  OverlayRef,
  ConnectionPositionPair,
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";

import { TooltipComponent } from "./tooltip/tooltip.component";

@Directive({
  selector: "[appTooltip]",
})
export class TooltipDirective {
  overlayRef: OverlayRef;

  @Input("appTooltip") templateRef: TemplateRef<any>;

  @Input("tooltipContext") context: any;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private overlay: Overlay,
  ) {}

  @HostListener("mouseenter")
  showTooltip() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions(this.getPositions()),
    });

    const tooltipPortal = new ComponentPortal<TooltipComponent>(
      TooltipComponent,
    );
    const componentRef = this.overlayRef.attach(tooltipPortal);
    componentRef.instance.templateRef = this.templateRef;
    componentRef.instance.context = this.context;
  }

  @HostListener("mouseleave")
  hideTooltip() {
    this.overlayRef.dispose();
  }

  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: "center",
        originY: "top",
        overlayX: "center",
        overlayY: "bottom",
      },
      {
        originX: "center",
        originY: "bottom",
        overlayX: "center",
        overlayY: "top",
      },
    ];
  }
}
