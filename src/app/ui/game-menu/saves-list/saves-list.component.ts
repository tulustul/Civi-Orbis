import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  listSaveGames,
  deleteSaveGame,
  exportSave,
} from '../../../game/saving';

@Component({
  selector: 'app-saves-list',
  templateUrl: './saves-list.component.html',
  styleUrls: ['./saves-list.component.scss'],
})
export class SavesListComponent implements OnInit {
  @Input() selectedSave: string;

  @Output() change = new EventEmitter<string>();

  saves: string[];

  constructor() {}

  ngOnInit(): void {
    this.refresh();
  }

  delete(save: string) {
    deleteSaveGame(save);
    this.refresh();
    if (this.selectedSave === save) {
      this.change.next('');
    }
  }

  export(save: string) {
    exportSave(save);
  }

  refresh() {
    this.saves = listSaveGames();
  }
}
