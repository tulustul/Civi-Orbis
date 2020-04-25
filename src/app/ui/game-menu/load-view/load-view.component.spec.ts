import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadViewComponent } from './load-view.component';

describe('LoadViewComponent', () => {
  let component: LoadViewComponent;
  let fixture: ComponentFixture<LoadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
