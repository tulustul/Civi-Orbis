import { Area } from "./area";
import { Subject } from "rxjs";

export class AreasManager {
  areas: Area[] = [];

  private _created$ = new Subject<Area>();
  created$ = this._created$.asObservable();

  private _destroyed$ = new Subject<Area>();
  destroyed$ = this._destroyed$.asObservable();

  make(color: number) {
    const area = new Area(color);
    this.areas.push(area);
    this._created$.next(area);
    return area;
  }

  destroy(area: Area) {
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
