import { Component } from '@angular/core';

import { UIStateService } from './ui/ui-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'civ';

  constructor(public uiState: UIStateService) {}
}
