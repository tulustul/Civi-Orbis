import { PlayerChanneled } from "../core/serialization/channel";
import { Area } from "./area";
import { GameState } from "./state";

export class Player {
  id: number;
  color: number;
  cssColor: string;
  vec4Color: number[];

  area: Area;

  constructor(game: GameState, player: PlayerChanneled) {
    this.id = player.id;
    this.color = player.color;
    this.cssColor = "#" + this.color.toString(16).padStart(6, "0");
    this.vec4Color = [
      parseInt(this.cssColor[1] + this.cssColor[2], 16) / 255,
      parseInt(this.cssColor[3] + this.cssColor[4], 16) / 255,
      parseInt(this.cssColor[5] + this.cssColor[6], 16) / 255,
      1,
    ];

    this.area = game.areasMap.get(player.areaId)!;
  }
}
