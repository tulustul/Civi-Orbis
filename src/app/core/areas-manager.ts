import { AreaCore } from "./area";

export class AreasManager {
  areas: AreaCore[] = [];

  lastId = 0;

  make(color: number) {
    const area = new AreaCore(color);
    area.id = this.lastId++;
    this.areas.push(area);
    return area;
  }

  destroy(area: AreaCore) {
    area.destroy();
    const index = this.areas.indexOf(area);
    if (index !== -1) {
      this.areas.splice(index, 1);
    }
  }
}
