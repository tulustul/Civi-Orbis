import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitActionRequirementsComponent } from './unit-action-requirements.component';

describe('UnitActionRequirementsComponent', () => {
  let component: UnitActionRequirementsComponent;
  let fixture: ComponentFixture<UnitActionRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitActionRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitActionRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
