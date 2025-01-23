import { Application, Container, RenderTexture, Sprite } from "pixi.js";

export class Layer {
  texture: RenderTexture;

  sprite = new Sprite();

  stage = new Container();

  constructor(private app: Application) {
    this.texture = RenderTexture.create({
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
    const newTexture = RenderTexture.create({ width, height });

    this.sprite.texture = newTexture;
    this.sprite.width = width;
    this.sprite.height = height;

    this.texture.destroy();
    this.texture = newTexture;
  }
}
