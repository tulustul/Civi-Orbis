import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Option } from '../option.interface';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  @Input() options: Option[];

  @Input() value: any;

  @Output() changed = new EventEmitter<any>();
}
