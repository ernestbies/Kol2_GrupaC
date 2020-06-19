import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemEBComponent } from './shop-item-eb.component';

describe('ShopItemEBComponent', () => {
  let component: ShopItemEBComponent;
  let fixture: ComponentFixture<ShopItemEBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemEBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
