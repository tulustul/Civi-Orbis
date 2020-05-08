import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerYieldsComponent } from './player-yields.component';

describe('PlayerYieldsComponent', () => {
  let component: PlayerYieldsComponent;
  let fixture: ComponentFixture<PlayerYieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerYieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerYieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
