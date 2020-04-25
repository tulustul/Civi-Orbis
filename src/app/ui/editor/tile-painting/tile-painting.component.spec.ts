import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilePaintingComponent } from './tile-painting.component';

describe('TilePaintingComponent', () => {
  let component: TilePaintingComponent;
  let fixture: ComponentFixture<TilePaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilePaintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilePaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
