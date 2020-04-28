import * as PIXIE from "pixi.js";

import { Game } from "../game/game";
import { getTileCoords, clearContainer, getTileVariants } from "./utils";
import { City } from "../game/city";

const CITY_TEXTURES = getTileVariants("villageSmall", 4);

export class CitiesRenderer {
  container = new PIXIE.Container();

  citiesGraphics = new Map<City, PIXIE.Sprite>();

  constructor(private game: Game) {
    game.citiesManager.spawned$.subscribe((city) => this.spawn(city));

    game.citiesManager.destroyed$.subscribe((city) => this.destroy(city));
  }

  spawn(city: City) {
    const textureName =
      CITY_TEXTURES[Math.floor(Math.random() * CITY_TEXTURES.length)];
    const g = new PIXIE.Sprite(this.textures[textureName]);

    this.container.addChild(g);
    this.citiesGraphics.set(city, g);

    const [x, y] = getTileCoords(city.tile);
    g.position.x = city.tile.x + (city.tile.y % 2 ? 0.5 : 0);
    g.position.y = city.tile.y * 0.75 - 0.5;
    g.scale.set(1 / g.width, 1 / g.width);
  }

  destroy(city: City) {
    const g = this.citiesGraphics.get(city)!;
    this.citiesGraphics.delete(city);
    g.destroy();
  }

  clear() {
    clearContainer(this.container);
    this.citiesGraphics.clear();
  }

  private get textures() {
    return this.game.renderer.textures;
  }
}
