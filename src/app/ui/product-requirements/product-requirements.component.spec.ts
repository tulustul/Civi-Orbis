import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequirementsComponent } from './product-requirements.component';

describe('ProductRequirementsComponent', () => {
  let component: ProductRequirementsComponent;
  let fixture: ComponentFixture<ProductRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
