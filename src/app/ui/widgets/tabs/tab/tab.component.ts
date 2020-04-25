import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() tabTitle: string;

  @Output() select = new EventEmitter<void>();

  isVisible = false;

  hide() {
    this.isVisible = false;
  }

  show() {
    this.isVisible = true;
    this.select.next();
  }
}
