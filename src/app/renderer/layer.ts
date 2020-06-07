import * as PIXI from "pixi.js";

export class Layer {
  texture: PIXI.RenderTexture;

  sprite = new PIXI.Sprite();

  stage = new PIXI.Container();

  constructor(private app: PIXI.Application) {
    this.texture = PIXI.RenderTexture.create({
      width: app.renderer.width,
      height: app.renderer.height,
    });

    this.sprite.texture = this.texture;
  }

  renderToTarget() {
    this.app.renderer.render(this.stage, this.texture);
    this.app.render();
  }

  resize(width: number, height: number) {
    const newTexture = PIXI.RenderTexture.create({ width, height });

    this.sprite.texture = newTexture;
    this.sprite.width = width;
    this.sprite.height = height;

    this.texture.destroy();
    this.texture = newTexture;
  }
}
