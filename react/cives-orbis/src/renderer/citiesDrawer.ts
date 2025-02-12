import { game } from "@/api";
import { City } from "@/api/city";
import { mapUi } from "@/ui/mapUi";
import { OutlineFilter } from "pixi-filters";
import { Container, Graphics, Text } from "pixi.js";
import { merge, takeUntil } from "rxjs";
import { camera } from "./camera";
import { TILE_SIZE } from "./constants";

export class CitiesDrawer {
  cities = new Map<number, CityDrawer>();

  private selectedDrawer: CityDrawer | null = null;

  constructor(private container: Container) {
    game.init$.subscribe(() => {
      this.init();
    });
  }

  init() {
    this.clear();

    if (!game.state) {
      return;
    }

    merge(game.state.citySpawned$, game.state.cityUpdated$)
      .pipe(takeUntil(game.stop$))
      .subscribe((city) => {
        this.updateCity(city);
      });

    game.state.cityDestroyed$.pipe(takeUntil(game.stop$)).subscribe((city) => {
      const drawer = this.cities.get(city.id);
      if (drawer) {
        drawer.destroy();
        this.cities.delete(city.id);
      }
    });

    mapUi.selectedCity$.pipe(takeUntil(game.stop$)).subscribe((city) => {
      if (this.selectedDrawer) {
        this.selectedDrawer.deselect();
      }

      if (!city) {
        return;
      }

      const drawer = this.cities.get(city.id);
      if (drawer) {
        this.selectedDrawer = drawer;
        drawer.select();
      }
    });

    this.build();
  }

  build() {
    for (const city of game.state!.cities) {
      this.makeCityDrawer(city);
    }
    this.setScale(camera.transform.scale);
  }

  private updateCity(city: City) {
    let drawer = this.cities.get(city.id);
    if (!drawer) {
      drawer = this.makeCityDrawer(city);
    }
    drawer.updateUi();
  }

  private makeCityDrawer(city: City) {
    const drawer = new CityDrawer(city);
    this.container.addChild(drawer.container);
    this.cities.set(city.id, drawer);
    return drawer;
  }

  public setScale(scale: number) {
    let alpha = 1;
    if (scale < 20) {
      alpha = Math.max(0, 1 - (20 - scale) / 8);
    }
    const citiesScale = 1 / TILE_SIZE / Math.pow(scale / TILE_SIZE, 0.5);
    // const citiesScale = (0.3 / TILE_SIZE) * Math.pow(scale, 0.45);
    for (const drawer of this.cities.values()) {
      drawer.container.alpha = alpha;
      drawer.container.scale.set(citiesScale);
    }
  }

  clear() {}
}

class CityDrawer {
  public container = new Container();
  private g = new Graphics();
  private nameText = new Text({ style: { fill: 0xffffff, fontSize: 40 } });
  private productionText = new Text({
    style: { fill: 0xffffff, fontSize: 40 },
  });
  private sizeText = new Text({
    style: { fill: 0xffffff, fontSize: 100 },
  });
  private isSelected = false;

  static selectionFilter = new OutlineFilter({
    color: 0xffffff,
    alpha: 1,
    thickness: 6,
    quality: 1,
  });

  static highlightFilter = new OutlineFilter({
    color: 0xffffff,
    alpha: 0.5,
    thickness: 6,
    quality: 1,
  });

  constructor(private city: City) {
    this.container.x = city.tile.x + (city.tile.y % 2 ? 1 : 0.5);
    this.container.y = city.tile.y * 0.75 + 0.5;
    this.container.addChild(
      this.g,
      this.nameText,
      this.productionText,
      this.sizeText,
    );

    this.productionText.y = 50;

    this.updateUi();

    this.container.interactive = true;
    this.container.on("pointerover", () => this.highlight());
    this.container.on("pointerout", () => this.dehighlight());
    this.container.on("click", () => mapUi.selectCity(this.city));
  }

  updateUi() {
    this.g.clear();

    console.log(this.city.turnsToGrow);
    this.nameText.text = `${this.city.name} (${this.city.turnsToGrow})`;
    if (this.city.productName) {
      this.productionText.text = `${this.city.productName} (${this.city.turnsToProductionEnd})`;
    } else {
      this.productionText.text = "";
    }
    this.sizeText.text = this.city.size.toString();

    const width =
      Math.max(this.nameText.width, this.productionText.width) + 150;
    this.nameText.x = -width / 2 + 120;
    this.productionText.x = -width / 2 + 120;

    this.sizeText.x = -this.sizeText.width / 2 + 50 - width / 2;

    this.g
      .roundRect(-width / 2, 0, width, 100, 50)
      .fill({ color: 0x000000, alpha: 0.8 });

    this.g
      .circle(-width / 2 + 53, 50, 44)
      .fill({ color: this.city.player.color });
  }

  destroy() {
    this.container.destroy();
  }

  highlight() {
    if (this.isSelected) {
      return;
    }
    this.container.filters = [CityDrawer.highlightFilter];
  }

  dehighlight() {
    if (this.isSelected) {
      return;
    }
    this.container.filters = [];
  }

  select() {
    this.isSelected = true;
    this.container.zIndex = 1;
    this.container.filters = [CityDrawer.selectionFilter];
  }

  deselect() {
    this.isSelected = false;
    this.container.filters = [];
    this.container.zIndex = 0;
  }
}

// if (import.meta.hot) {
//   console.log("citiesDrawer.ts is hot");
// }

type ProgressBarOptions = {
  g: Graphics;
  progress: number;
  nextProgress: number;
  total: number;
  height: number;
  width: number;
  x: number;
  y: number;
  color: number;
  nextColor: number;
};
function progressBar(options: ProgressBarOptions) {}
