import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsEBComponent } from './shop-details-eb.component';

describe('ShopDetailsEBComponent', () => {
  let component: ShopDetailsEBComponent;
  let fixture: ComponentFixture<ShopDetailsEBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsEBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
