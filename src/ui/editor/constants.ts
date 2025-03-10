import { TileImprovement, TileRoad } from "@/core/tile-improvements";
import { RESOURCES_DEFINITIONS } from "@/data/resources";
import { Climate, LandForm, SeaLevel, TileDirection } from "@/shared";
import { Option } from "@/ui/components";

export const SEA_LEVEL_OPTIONS: Option<SeaLevel>[] = [
  { label: "none", value: SeaLevel.none },
  { label: "shallow", value: SeaLevel.shallow },
  { label: "deep", value: SeaLevel.deep },
];

export const LAND_FORM_OPTIONS: Option<LandForm>[] = [
  { label: "plains", value: LandForm.plains },
  { label: "hills", value: LandForm.hills },
  { label: "mountains", value: LandForm.mountains },
];

export const CLIMATE_OPTIONS: Option<Climate>[] = [
  { label: "tropical", value: Climate.tropical },
  { label: "savanna", value: Climate.savanna },
  { label: "desert", value: Climate.desert },
  { label: "temperate", value: Climate.temperate },
  { label: "tundra", value: Climate.tundra },
  { label: "arctic", value: Climate.arctic },
];

export const FOREST_OPTIONS: Option<boolean>[] = [
  { label: "no forest", value: false },
  { label: "forest", value: true },
];

export const WETLANDS_OPTIONS: Option<boolean>[] = [
  { label: "no wetlands", value: false },
  { label: "wetlands", value: true },
];

export const IMPROVEMENT_OPTIONS: Option<TileImprovement | null>[] = [
  { label: "no improvement", value: null },
  { label: "farm", value: TileImprovement.farm },
  { label: "mine", value: TileImprovement.mine },
  { label: "sawmill", value: TileImprovement.sawmill },
];

export const ROAD_OPTIONS: Option<TileRoad | null>[] = [
  { label: "no road", value: null },
  { label: "road", value: TileRoad.road },
];

export const RIVER_OPTIONS: Option<TileDirection>[] = [
  { label: "NW", value: TileDirection.NW },
  { label: "NE", value: TileDirection.NE },
  { label: "E", value: TileDirection.E },
  { label: "SE", value: TileDirection.SE },
  { label: "SW", value: TileDirection.SW },
  { label: "W", value: TileDirection.W },
];

export const RESOURCE_OPTIONS = [
  { label: "None", value: null } as Option<string | null>,
].concat(
  RESOURCES_DEFINITIONS.map((r) => {
    return { label: r.name, value: r.id };
  })
);
