import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavesListComponent } from './saves-list.component';

describe('SavesListComponent', () => {
  let component: SavesListComponent;
  let fixture: ComponentFixture<SavesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
