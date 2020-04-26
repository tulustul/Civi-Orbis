import { Component, OnInit, HostBinding } from '@angular/core';

import { tap, skip, filter } from 'rxjs/operators';

import { Game } from 'src/app/game/game';

@Component({
  selector: 'app-turn-counter',
  templateUrl: './turn-counter.component.html',
  styleUrls: ['./turn-counter.component.scss'],
})
export class TurnCounterComponent implements OnInit {
  @HostBinding('class.is-visible')
  isVisible = false;

  timeout: number;

  constructor(public game: Game) {}

  ngOnInit(): void {
    this.game.turn$.pipe(filter((turn) => turn > 1)).subscribe(() => {
      this.isVisible = true;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => (this.isVisible = false), 2000) as any;
    });
  }
}
