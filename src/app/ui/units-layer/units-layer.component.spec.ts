import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsLayerComponent } from './units-layer.component';

describe('UnitsLayerComponent', () => {
  let component: UnitsLayerComponent;
  let fixture: ComponentFixture<UnitsLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
