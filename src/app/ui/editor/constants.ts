import {
  TileDirection,
  Climate,
  Landform,
  SeaLevel,
} from 'src/app/game/tile.interface';
import { Option } from '../widgets/option.interface';

export const SEA_LEVEL_OPTIONS: Option[] = [
  { label: 'none', value: SeaLevel.none },
  { label: 'shallow', value: SeaLevel.shallow },
  { label: 'deep', value: SeaLevel.deep },
];

export const LAND_FORM_OPTIONS: Option[] = [
  { label: 'plains', value: Landform.plains },
  { label: 'hills', value: Landform.hills },
  { label: 'mountains', value: Landform.mountains },
];

export const CLIMATE_OPTIONS: Option[] = [
  { label: 'tropical', value: Climate.tropical },
  { label: 'savanna', value: Climate.savanna },
  { label: 'desert', value: Climate.desert },
  { label: 'continental', value: Climate.continental },
  { label: 'oceanic', value: Climate.oceanic },
  { label: 'tundra', value: Climate.tundra },
];

export const FOREST_OPTIONS: Option[] = [
  { label: 'no forest', value: false },
  { label: 'forest', value: true },
];

export const RIVER_OPTIONS: Option[] = [
  { label: 'NW', value: TileDirection.TOP_LEFT },
  { label: 'NE', value: TileDirection.TOP_RIGHT },
  { label: 'E', value: TileDirection.RIGHT },
  { label: 'SE', value: TileDirection.BOTTOM_RIGHT },
  { label: 'SW', value: TileDirection.BOTTOM_LEFT },
  { label: 'W', value: TileDirection.LEFT },
];
