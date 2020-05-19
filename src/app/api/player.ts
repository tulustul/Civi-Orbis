import { PlayerChanneled } from "../core/serialization/channel";

export class Player {
  id: number;
  color: number;
  cssColor: string;

  constructor(player: PlayerChanneled) {
    this.id = player.id;
    this.color = player.color;
    this.cssColor = "#" + this.color.toString(16).padStart(6, "0");
  }
}
