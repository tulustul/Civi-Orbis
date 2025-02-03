import { Component, OnDestroy, input, output } from "@angular/core";

import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"],
  standalone: false,
})
export class TabComponent implements OnDestroy {
  tabTitle = input.required<string>();

  select = output<void>();

  private _isVisible$ = new BehaviorSubject<boolean>(false);
  isVisible$ = this._isVisible$.asObservable().pipe(distinctUntilChanged());

  ngOnDestroy() {
    this.hide();
  }

  hide() {
    this._isVisible$.next(false);
  }

  show() {
    this._isVisible$.next(true);
    this.select.emit();
  }

  get isVisible() {
    return this._isVisible$.value;
  }
}
