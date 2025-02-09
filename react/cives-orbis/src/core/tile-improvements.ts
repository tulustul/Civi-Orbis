export enum TileImprovement {
  farm,
  mine,
  sawmill,
}

export enum TileRoad {
  road,
}

export const IMPROVEMENT_PUBLIC_WORKS_COSTS: Record<TileImprovement, number> = {
  [TileImprovement.farm]: 15,
  [TileImprovement.mine]: 15,
  [TileImprovement.sawmill]: 15,
};

export const IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN: Record<
  TileImprovement,
  number
> = {
  [TileImprovement.farm]: 1,
  [TileImprovement.mine]: 1,
  [TileImprovement.sawmill]: 1,
};

export const ROAD_PUBLIC_WORKS_COSTS: Record<TileRoad, number> = {
  [TileRoad.road]: 15,
};

export const ROAD_PUBLIC_WORKS_COSTS_PER_TURN: Record<TileRoad, number> = {
  [TileRoad.road]: 1,
};
