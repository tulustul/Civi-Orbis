import { BaseTile } from "../shared";
import { City } from "./city";
import { Unit } from "./unit";

export interface Resource {
  id: string;
  name: string;
  quantity: number;
}

export interface Tile extends BaseTile {
  areaOf: City | null;

  neighbours: Tile[];
  fullNeighbours: (Tile | null)[]; // keeps neighbours in all directions, null if map border, can be indexed with TileDirection

  city: City | null;
  units: Unit[];

  resource: Resource | null;
}
