import { BehaviorSubject } from 'rxjs';

export class UIState {
  editorEnabled$ = new BehaviorSubject<boolean>(false);
  menuVisible$ = new BehaviorSubject<boolean>(false);
}
