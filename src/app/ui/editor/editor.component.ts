import { Component, OnInit, OnDestroy } from "@angular/core";

import { UIState } from "../ui-state";
import { MapUi } from "../map-ui";

@Component({
    selector: "app-editor",
    templateUrl: "./editor.component.html",
    styleUrls: ["./editor.component.scss"],
    standalone: false
})
export class EditorComponent implements OnInit, OnDestroy {
  constructor(private uiState: UIState, private mapUi: MapUi) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.mapUi.editorArea.clear();
    this.mapUi.enableSelectingTile(false);
  }

  close() {
    this.uiState.editorEnabled$.next(false);
  }
}
