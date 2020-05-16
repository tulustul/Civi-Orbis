import { BehaviorSubject } from "rxjs";
import { CityCore } from "../core/city";

export class UIState {
  editorEnabled$ = new BehaviorSubject<boolean>(false);
  menuVisible$ = new BehaviorSubject<boolean>(true);
  selectedCity$ = new BehaviorSubject<CityCore | null>(null);
}
