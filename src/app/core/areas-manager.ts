import { Subject } from "rxjs";

import { Area } from "./area";

export class AreasManager {
  areas: Area[] = [];

  lastId = 0;

  private _created$ = new Subject<Area>();
  created$ = this._created$.asObservable();

  private _destroyed$ = new Subject<Area>();
  destroyed$ = this._destroyed$.asObservable();

  make(color: number) {
    const area = new Area(color);
    area.id = this.lastId++;
    this.areas.push(area);
    this._created$.next(area);
    return area;
  }

  destroy(area: Area) {
    area.destroy();
    const index = this.areas.indexOf(area);
    if (index !== -1) {
      this.areas.splice(index, 1);
      this._destroyed$.next(area);
    }
  }

  clear() {
    const toDestroy = [...this.areas];
    for (const area of toDestroy) {
      this.destroy(area);
    }
  }
}
