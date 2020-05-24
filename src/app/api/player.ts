import { PlayerChanneled } from "../core/serialization/channel";

export class Player {
  id: number;
  color: number;
  cssColor: string;
  vec4Color: number[];

  areaId: number;

  constructor(player: PlayerChanneled) {
    this.id = player.id;
    this.color = player.color;
    this.cssColor = "#" + this.color.toString(16).padStart(6, "0");
    this.vec4Color = [
      parseInt(this.cssColor[1] + this.cssColor[2], 16) / 255,
      parseInt(this.cssColor[3] + this.cssColor[4], 16) / 255,
      parseInt(this.cssColor[5] + this.cssColor[6], 16) / 255,
      1,
    ];

    this.areaId = player.areaId;
  }
}
