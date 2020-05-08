import { Tile } from "./tile";
import { Unit } from "./unit";
import { getTileIndex, getTileFromIndex } from "./serialization";
import { Game } from "./game";
import { City } from "./city";
import { Yields, EMPTY_YIELDS, zeroYields, addToYields } from "./yields";

export const PLAYER_COLORS: number[] = [
  0xff0000,
  0x00ff00,
  0x0000ff,
  0xffff00,
  0x00ffff,
  0xff00ff,
  0x999999,
  0xdddddd,
  0xfbacac,
  0xe6b873,
  0x39862b,
  0x2e716e,
  0x7457bb,
  0xab57bb,
  0x79583c,
  0xb6bbe6,
];

export enum PlayerType {
  human,
  ai,
}

export interface PlayerSerialized {
  type: PlayerType;
  color: number;
  exploredTiles: number[];
}

export class Player {
  id: number;

  exploredTiles = new Set<Tile>();

  visibleTiles = new Set<Tile>();

  units: Unit[] = [];

  cities: City[] = [];

  cityWithoutProduction: City[] = [];

  yieldsPerTurn: Yields = { ...EMPTY_YIELDS };

  yieldsTotal: Yields = { ...EMPTY_YIELDS };

  area = this.game.areasManager.make(this.color);

  constructor(
    public game: Game,
    public type: PlayerType,
    public color: number,
  ) {}

  serialize(): PlayerSerialized {
    return {
      type: this.type,
      color: this.color,
      exploredTiles: Array.from(this.exploredTiles).map((tile) =>
        getTileIndex(this.game.map, tile),
      ),
    };
  }

  static deserialize(game: Game, data: PlayerSerialized) {
    const player = new Player(game, data.type, data.color);
    for (const tileIndex of data.exploredTiles) {
      player.exploredTiles.add(getTileFromIndex(game.map, tileIndex));
    }
    return player;
  }

  updateYields() {
    zeroYields(this.yieldsPerTurn);
    for (const city of this.cities) {
      addToYields(this.yieldsPerTurn, city.yields);
    }
  }

  nextTurn() {
    this.updateYields();
    addToYields(this.yieldsTotal, this.yieldsPerTurn);
    this.updateCitiesWithoutProduction();
  }

  updateCitiesWithoutProduction() {
    this.cityWithoutProduction = this.cities.filter((c) => !c.product);
  }

  addCity(city: City) {
    this.cities.push(city);
    city.product$.subscribe(() => this.updateCitiesWithoutProduction());
  }
}
