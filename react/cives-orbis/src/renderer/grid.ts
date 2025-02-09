import { TilingSprite } from "pixi.js";
import { getAssets } from "./assets";
import { game } from "@/api";

export class Grid {
  public sprite: TilingSprite;

  private texture = getAssets().textures.grid;

  constructor() {
    this.sprite = new TilingSprite(this.texture);
    this.sprite.zIndex = 10;
    this.sprite.tileScale.set(1 / 128, 1 / 126.65);
    this.sprite.alpha = 0.9;
    // this.sprite.visible = false;
    // renderer.overlaysContainer.addChild(this.sprite);

    game.init$.subscribe(() => {
      this.sprite.width = game.state!.map.width;
      this.sprite.height = game.state!.map.height * 0.75;
    });
  }

  set enabled(enabled: boolean) {
    this.sprite.visible = enabled;
  }
  get enabled() {
    return this.sprite.visible;
  }
}
