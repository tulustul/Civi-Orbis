import * as PIXIE from "pixi.js";

import { getTileVariants, pickRandom, drawTileSprite } from "../utils";
import { City } from "src/app/core/city";
import { Game } from "src/app/core/game";
import { TileContainer } from "../tile-container";
import { takeUntil } from "rxjs/operators";
import { GameRenderer } from "../renderer";

const SMALL_CITY_TEXTURES = getTileVariants("villageSmall", 4);
const BIG_CITY_TEXTURES = getTileVariants("village", 4);

export class CityDrawer {
  citiesGraphics = new Map<City, PIXIE.Sprite>();

  constructor(
    private game: Game,
    private renderer: GameRenderer,
    private container: TileContainer,
  ) {
    game.started$.subscribe(() => {
      game.citiesManager.spawned$
        .pipe(takeUntil(game.stopped$))
        .subscribe((city) => this.spawn(city));

      game.citiesManager.destroyed$
        .pipe(takeUntil(game.stopped$))
        .subscribe((city) => this.destroy(city));

      game.citiesManager.updated$
        .pipe(takeUntil(game.stopped$))
        .subscribe((city) => this.update(city));
    });
  }

  build() {
    for (const city of this.game.citiesManager.cities) {
      this.spawn(city);
    }
  }

  spawn(city: City) {
    const variants = city.size >= 10 ? BIG_CITY_TEXTURES : SMALL_CITY_TEXTURES;
    const textureName = pickRandom(variants);
    const g = drawTileSprite(city.tile, this.textures[textureName]);

    this.container.addChild(g, city.tile);
    this.citiesGraphics.set(city, g);
  }

  destroy(city: City) {
    const g = this.citiesGraphics.get(city)!;
    this.citiesGraphics.delete(city);
    g.destroy();
  }

  update(city: City) {
    this.destroy(city);
    this.spawn(city);
  }

  clear() {
    this.container.destroyAllChildren();
    this.citiesGraphics.clear();
  }

  private get textures() {
    return this.renderer.textures;
  }
}
