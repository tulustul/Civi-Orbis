import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersEditorComponent } from './players-editor.component';

describe('PlayersEditorComponent', () => {
  let component: PlayersEditorComponent;
  let fixture: ComponentFixture<PlayersEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
