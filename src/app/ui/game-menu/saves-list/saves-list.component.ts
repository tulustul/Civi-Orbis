import { Component, EventEmitter, OnInit, Output, input } from "@angular/core";

import { deleteSaveGame, exportSave, listSaveGames } from "../../../api/saving";

@Component({
  selector: "app-saves-list",
  templateUrl: "./saves-list.component.html",
  styleUrls: ["./saves-list.component.scss"],
  standalone: false,
})
export class SavesListComponent implements OnInit {
  selectedSave = input.required<string>();

  @Output() change = new EventEmitter<string>();

  saves: string[] = [];

  ngOnInit(): void {
    this.refresh();
  }

  delete(save: string) {
    deleteSaveGame(save);
    this.refresh();
    if (this.selectedSave() === save) {
      this.change.next("");
    }
  }

  export(save: string) {
    exportSave(save);
  }

  refresh() {
    this.saves = listSaveGames();
  }
}
