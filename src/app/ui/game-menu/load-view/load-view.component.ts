import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";

import { UIState } from "../../ui-state";
import { SavesListComponent } from "../saves-list/saves-list.component";
import { importSave, loadGameData } from "src/app/api/saving";
import { GameApi } from "src/app/api";

@Component({
  selector: "app-load-view",
  templateUrl: "./load-view.component.html",
  styleUrls: ["./load-view.component.scss"],
})
export class LoadViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  @ViewChild(SavesListComponent) savesListComponent: SavesListComponent;

  saveName = "";

  constructor(private game: GameApi, private uiState: UIState) {}

  ngOnInit(): void {}

  async load() {
    if (!this.saveName) {
      return;
    }

    const data = loadGameData(this.saveName);
    if (!data) {
      return null;
    }

    await this.game.loadGame(data);
    this.uiState.menuVisible$.next(false);
  }

  async import(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (!files) {
      return;
    }

    await importSave(files[0]);

    this.savesListComponent.refresh();
  }
}
