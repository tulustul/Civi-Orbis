import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { Renderer } from './renderer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'civ';
}
