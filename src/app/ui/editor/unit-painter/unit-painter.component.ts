import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

import { Option } from "../../widgets/option.interface";
import { MapUi } from "../../map-ui";
import { UnitDefinition } from "src/app/core/data.interface";
import { GameApi } from "src/app/api";
import { Tile } from "src/app/api/tile.interface";
import { makeCommand } from "src/app/api/internal/commander";
import { UNITS_DEFINITIONS } from "src/app/data/products/units";

@Component({
  selector: "app-unit-painter",
  templateUrl: "./unit-painter.component.html",
  styleUrls: ["./unit-painter.component.scss"],
})
export class UnitPainterComponent implements OnInit {
  @Input() isVisible$: Observable<boolean>;

  definition: UnitDefinition | null = null;

  definitionOptions: Option[] = [];

  selectedPlayerId: number = this.game.state!.trackedPlayer.id;

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
        this.spawn(tile);
      });
    });

    hidden.subscribe(() => this.mapUi.enableSelectingTile(false));
  }

  spawn(tile: Tile) {
    if (!this.definition) {
      return;
    }

    makeCommand("unit.spawn", {
      definitionId: this.definition.id,
      tileId: tile.id,
      playerId: this.selectedPlayerId,
    });
  }

  get players() {
    return this.game.state!.players;
  }
}
