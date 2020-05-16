import { Option } from "../widgets/option.interface";
import { TileImprovement, TileRoad } from "src/app/core/tile-improvements";
import { SeaLevel, LandForm, Climate, TileDirection } from "src/app/shared";

export const SEA_LEVEL_OPTIONS: Option[] = [
  { label: "none", value: SeaLevel.none },
  { label: "shallow", value: SeaLevel.shallow },
  { label: "deep", value: SeaLevel.deep },
];

export const LAND_FORM_OPTIONS: Option[] = [
  { label: "plains", value: LandForm.plains },
  { label: "hills", value: LandForm.hills },
  { label: "mountains", value: LandForm.mountains },
];

export const CLIMATE_OPTIONS: Option[] = [
  { label: "tropical", value: Climate.tropical },
  { label: "savanna", value: Climate.savanna },
  { label: "desert", value: Climate.desert },
  { label: "continental", value: Climate.continental },
  { label: "oceanic", value: Climate.oceanic },
  { label: "tundra", value: Climate.tundra },
  { label: "arctic", value: Climate.arctic },
];

export const FOREST_OPTIONS: Option[] = [
  { label: "no forest", value: false },
  { label: "forest", value: true },
];

export const WETLANDS_OPTIONS: Option[] = [
  { label: "no wetlands", value: false },
  { label: "wetlands", value: true },
];

export const IMPROVEMENT_OPTIONS: Option[] = [
  { label: "no improvement", value: null },
  { label: "farm", value: TileImprovement.farm },
  { label: "mine", value: TileImprovement.mine },
  { label: "sawmill", value: TileImprovement.sawmill },
];

export const ROAD_OPTIONS: Option[] = [
  { label: "no road", value: null },
  { label: "road", value: TileRoad.road },
];

export const RIVER_OPTIONS: Option[] = [
  { label: "NW", value: TileDirection.NW },
  { label: "NE", value: TileDirection.NE },
  { label: "E", value: TileDirection.E },
  { label: "SE", value: TileDirection.SE },
  { label: "SW", value: TileDirection.SW },
  { label: "W", value: TileDirection.W },
];
