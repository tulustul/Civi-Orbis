import { BehaviorSubject } from 'rxjs';

export class UIStateService {
  editorEnabled$ = new BehaviorSubject<boolean>(false);
}
