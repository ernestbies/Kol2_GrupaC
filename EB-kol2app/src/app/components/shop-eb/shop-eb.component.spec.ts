import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEBComponent } from './shop-eb.component';

describe('ShopEBComponent', () => {
  let component: ShopEBComponent;
  let fixture: ComponentFixture<ShopEBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
