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
import { Camera } from "src/app/renderer/camera";

@Component({
  selector: "app-load-view",
  templateUrl: "./load-view.component.html",
  styleUrls: ["./load-view.component.scss"],
})
export class LoadViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  @ViewChild(SavesListComponent) savesListComponent: SavesListComponent;

  saveName = "";

  waiting = false;

  constructor(
    private game: GameApi,
    private uiState: UIState,
    private camera: Camera,
  ) {}

  ngOnInit(): void {}

  async load() {
    if (!this.saveName) {
      return;
    }

    const data = loadGameData(this.saveName);
    if (!data) {
      return null;
    }

    this.waiting = true;

    await this.game.loadGame(data);

    const city = this.game.state?.trackedPlayer.cities[0];
    if (city) {
      this.camera.moveToTile(city.tile);
    } else {
      const unit = this.game.state?.trackedPlayer.units[0];
      if (unit) {
        this.camera.moveToTile(unit.tile);
      }
    }

    this.uiState.menuVisible$.next(false);

    this.waiting = false;
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
