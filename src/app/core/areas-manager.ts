import { AreaCore } from "./area";
import { collector } from "./collector";

export class AreasManager {
  areas: AreaCore[] = [];

  lastId = 0;

  make(color: number) {
    const area = new AreaCore(color);
    area.id = this.lastId++;
    this.areas.push(area);
    collector.areas.add(area);
    return area;
  }

  destroy(area: AreaCore) {
    collector.areasDestroyed.add(area.id);
    const index = this.areas.indexOf(area);
    if (index !== -1) {
      this.areas.splice(index, 1);
    }
  }
}
