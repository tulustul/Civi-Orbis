import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Option } from '../option.interface';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent {
  @Input() options: Option[];

  @Input() value: any[];

  @Output() changed = new EventEmitter<any[]>();

  toggleOption(option: Option) {
    if (this.value.includes(option.value)) {
      const index = this.value.indexOf(option.value);
      const newValue = [...this.value];
      newValue.splice(index, 1);
      this.changed.next(newValue);
    } else {
      this.changed.next([...this.value, option.value]);
    }
  }
}
