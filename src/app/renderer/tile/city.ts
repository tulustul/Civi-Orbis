import * as PIXIE from "pixi.js";

import { getTileVariants, pickRandom, drawTileSprite } from "../utils";
import { GameRenderer } from "../renderer";
import { City } from "src/app/api/city";

const SMALL_CITY_TEXTURES = getTileVariants("villageSmall", 4);
const BIG_CITY_TEXTURES = getTileVariants("village", 4);

export class CityDrawer {
  citiesGraphics = new Map<City, PIXIE.Sprite>();

  constructor(private renderer: GameRenderer) {}

  draw(city: City, container: PIXI.Container) {
    const variants = city.size >= 10 ? BIG_CITY_TEXTURES : SMALL_CITY_TEXTURES;
    const textureName = pickRandom(variants);
    const g = drawTileSprite(city.tile, this.textures[textureName]);

    container.addChild(g);
    this.citiesGraphics.set(city, g);
  }

  destroy(city: City) {
    const g = this.citiesGraphics.get(city)!;
    this.citiesGraphics.delete(city);
    g.destroy();
  }

  update(city: City, container: PIXI.Container) {
    this.destroy(city);
    this.draw(city, container);
  }

  clear() {
    this.citiesGraphics.clear();
  }

  private get textures() {
    return this.renderer.textures;
  }
}
