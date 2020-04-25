import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Game } from 'src/app/game/game';
import {
  Tile,
  SeaLevel,
  Landform,
  Climate,
  TileDirection,
} from 'src/app/game/tile.interface';
import { Option } from '../../widgets/option.interface';

@Component({
  selector: 'app-tile-editor',
  templateUrl: './tile-editor.component.html',
  styleUrls: ['./tile-editor.component.scss'],
})
export class TileEditorComponent implements OnInit, OnDestroy {
  tile: Tile | null = null;

  ngUnsubscribe = new Subject<void>();

  SEA_LEVEL_OPTIONS: Option[] = [
    { label: 'none', value: SeaLevel.none },
    { label: 'shallow', value: SeaLevel.shallow },
    { label: 'deep', value: SeaLevel.deep },
  ];

  LAND_FORM_OPTIONS: Option[] = [
    { label: 'plains', value: Landform.plains },
    { label: 'hills', value: Landform.hills },
    { label: 'mountains', value: Landform.mountains },
  ];

  CLIMATE_OPTIONS: Option[] = [
    { label: 'tropical', value: Climate.tropical },
    { label: 'savanna', value: Climate.savanna },
    { label: 'desert', value: Climate.desert },
    { label: 'continental', value: Climate.continental },
    { label: 'oceanic', value: Climate.oceanic },
    { label: 'tundra', value: Climate.tundra },
  ];

  FOREST_OPTIONS: Option[] = [
    { label: 'no forest', value: false },
    { label: 'forest', value: true },
  ];

  RIVER_OPTIONS: Option[] = [
    { label: 'NW', value: TileDirection.TOP_LEFT },
    { label: 'NE', value: TileDirection.TOP_RIGHT },
    { label: 'E', value: TileDirection.RIGHT },
    { label: 'SE', value: TileDirection.BOTTOM_RIGHT },
    { label: 'SW', value: TileDirection.BOTTOM_LEFT },
    { label: 'W', value: TileDirection.LEFT },
  ];

  constructor(private game: Game) {}

  ngOnInit(): void {
    this.game.tilesManager.selectedTile$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((tile) => (this.tile = tile));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  update() {
    if (this.tile) {
      this.game.tilesManager.updatedTile$.next(this.tile);
    }
  }
}
