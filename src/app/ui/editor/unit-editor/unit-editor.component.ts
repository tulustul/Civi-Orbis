import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

import { Option } from "../../widgets/option.interface";
import { UNITS_DEFINITIONS } from "src/app/data/units";
import { MapUi } from "../../map-ui";
import { UnitDetails } from "src/app/api/unit-details";
import { UnitDefinition } from "src/app/core/unit.interface";
import { GameApi } from "src/app/api";
import { Tile } from "src/app/api/tile.interface";

@Component({
  selector: "app-unit-editor",
  templateUrl: "./unit-editor.component.html",
  styleUrls: ["./unit-editor.component.scss"],
})
export class UnitEditorComponent implements OnInit {
  @Input() isVisible$: Observable<boolean>;

  spawnMode = false;

  definition: UnitDefinition | null = null;

  unit: UnitDetails | null = null;

  definitionOptions: Option[] = [];

  constructor(private game: GameApi, private mapUi: MapUi) {}

  ngOnInit(): void {
    this.definitionOptions = UNITS_DEFINITIONS.map((d) => {
      return { label: d.name, value: d } as Option;
    });

    const shown = this.isVisible$.pipe(filter((v) => v));
    const hidden = this.isVisible$.pipe(filter((v) => !v));

    shown.subscribe(() => {
      this.mapUi.enableSelectingTile(true);
      this.mapUi.selectedTile$.pipe(takeUntil(hidden)).subscribe((tile) => {
        if (!tile) {
          return;
        }
        // if (this.spawnMode) {
        //   this.spawn(tile);
        // } else {
        //   this.selectTile(tile);
        // }
      });
    });

    hidden.subscribe(() => this.mapUi.enableSelectingTile(false));
  }

  spawn(tile: Tile) {
    if (!this.definition) {
      return;
    }

    // this.game.unitsManager.spawn(
    //   this.definition.id,
    //   tile,
    //   this.game.players[0],
    // );
  }

  destroy() {
    if (this.unit) {
      // this.game.unitsManager.destroy(this.unit);
    }
  }

  selectTile(tile: Tile) {
    if (tile.units.length) {
      // this.unit = tile.units[0];
      // this.definition = this.unit.definition;
    }
  }
}
