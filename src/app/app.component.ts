import { Component } from '@angular/core';

import { UIState } from './ui/ui-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'civ';

  constructor(public uiState: UIState) {}
}
