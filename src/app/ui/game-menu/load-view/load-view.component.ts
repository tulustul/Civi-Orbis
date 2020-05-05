import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";

import { Game } from "src/app/core/game";
import { UIState } from "../../ui-state";
import { loadGame, importSave } from "src/app/core/saving";
import { SavesListComponent } from "../saves-list/saves-list.component";

@Component({
  selector: "app-load-view",
  templateUrl: "./load-view.component.html",
  styleUrls: ["./load-view.component.scss"],
})
export class LoadViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  @ViewChild(SavesListComponent) savesListComponent: SavesListComponent;

  saveName = "";

  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {}

  load() {
    if (this.saveName) {
      loadGame(this.game, this.saveName);
      this.uiState.menuVisible$.next(false);
    }
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
