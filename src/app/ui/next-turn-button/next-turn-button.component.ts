import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
} from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { NextTurnService } from "../next-turn.service";
import { GameApi } from "src/app/api";

@Component({
    selector: "app-next-turn-button",
    templateUrl: "./next-turn-button.component.html",
    styleUrls: ["./next-turn-button.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class NextTurnButtonComponent implements OnInit, OnDestroy {
  ngUnsubscribe = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private game: GameApi,
    public nextTurnService: NextTurnService,
  ) {}

  ngOnInit() {
    this.game.nextTask$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get cssClass() {
    const nextTask = this.game.nextTask;

    if (!nextTask) {
      return "";
    }

    switch (nextTask.task) {
      case "city":
        return "production-color";
      case "unit":
        return "";
    }
  }

  get label() {
    const nextTask = this.game.nextTask;

    if (!nextTask) {
      return "Next turn";
    }

    switch (nextTask.task) {
      case "city":
        return "Choose production";
      case "unit":
        return "Unit needs orders";
    }
  }
}
