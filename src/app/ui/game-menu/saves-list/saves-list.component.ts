import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { listSaveGames } from '../../../game/saving';

@Component({
  selector: 'app-saves-list',
  templateUrl: './saves-list.component.html',
  styleUrls: ['./saves-list.component.scss'],
})
export class SavesListComponent implements OnInit {
  @Input() selectedSave: string;

  @Output() change = new EventEmitter<string>();

  saves = listSaveGames();

  constructor() {}

  ngOnInit(): void {}
}
