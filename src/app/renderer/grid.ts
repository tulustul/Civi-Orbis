import { Sprite, TilingSprite } from "pixi.js";
import { TILE_SIZE } from "./constants";
import { GameRenderer } from "./renderer";

export class Grid {
  public sprite: TilingSprite;

  constructor(public renderer: GameRenderer) {
    this.sprite = new TilingSprite(renderer.gridTexture);
    this.sprite.zIndex = 10;
    this.sprite.tileScale.set(1 / 128, 1 / 126.65);
    this.sprite.alpha = 0.9;
    this.sprite.visible = false;
    renderer.overlaysContainer.addChild(this.sprite);

    renderer.game.init$.subscribe(() => {
      this.sprite.width = renderer.game.state!.map.width;
      this.sprite.height = renderer.game.state!.map.height * 0.75;
    });
  }

  get transform() {
    return this.renderer.camera.transform;
  }

  set enabled(enabled: boolean) {
    this.sprite.visible = enabled;
  }
  get enabled() {
    return this.sprite.visible;
  }
}
