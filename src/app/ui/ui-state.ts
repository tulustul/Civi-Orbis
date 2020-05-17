import { BehaviorSubject } from "rxjs";

import { CityDetails } from "../api/city-details";

export class UIState {
  editorEnabled$ = new BehaviorSubject<boolean>(false);
  menuVisible$ = new BehaviorSubject<boolean>(true);
  selectedCity$ = new BehaviorSubject<CityDetails | null>(null);
}
