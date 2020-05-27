import { BehaviorSubject } from "rxjs";

import { CityDetails } from "../api/city-details";
import { UiView } from "./ui-view";

export class UIState {
  editorEnabled$ = new BehaviorSubject<boolean>(false);
  menuVisible$ = new BehaviorSubject<boolean>(true);
  selectedCity$ = new BehaviorSubject<CityDetails | null>(null);

  activeView: UiView | null = null;
}
