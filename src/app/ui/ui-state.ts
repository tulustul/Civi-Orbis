import { BehaviorSubject } from "rxjs";
import { City } from "../core/city";

export class UIState {
  editorEnabled$ = new BehaviorSubject<boolean>(false);
  menuVisible$ = new BehaviorSubject<boolean>(true);
  selectedCity$ = new BehaviorSubject<City | null>(null);
}
