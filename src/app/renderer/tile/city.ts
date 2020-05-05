import * as PIXIE from "pixi.js";

import { getTileVariants } from "../utils";
import { City } from "src/app/core/city";
import { Game } from "src/app/core/game";
import { TileContainer } from "../tile-container";

const CITY_TEXTURES = getTileVariants("villageSmall", 4);

export class CityDrawer {
  citiesGraphics = new Map<City, PIXIE.Sprite>();

  constructor(private game: Game, private container: TileContainer) {
    game.citiesManager.spawned$.subscribe((city) => this.spawn(city));

    game.citiesManager.destroyed$.subscribe((city) => this.destroy(city));
  }

  build() {
    for (const city of this.game.citiesManager.cities) {
      this.spawn(city);
    }
  }

  spawn(city: City) {
    const textureName =
      CITY_TEXTURES[Math.floor(Math.random() * CITY_TEXTURES.length)];
    const g = new PIXIE.Sprite(this.textures[textureName]);

    this.container.addChild(g, city.tile);
    this.citiesGraphics.set(city, g);

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
    this.container.destroyAllChildren();
    this.citiesGraphics.clear();
  }

  private get textures() {
    return this.game.renderer.textures;
  }
}
