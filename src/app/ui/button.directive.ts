import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: "button",
    standalone: false
})
export class ButtonDirective {
  constructor(private elementRef: ElementRef<HTMLButtonElement>) {}

  @HostListener("click")
  onClick() {
    // Prevents clicking focused button when pressing "enter" for next turn.
    this.elementRef.nativeElement.blur();
  }
}
