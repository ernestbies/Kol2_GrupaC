import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-item-eb',
  templateUrl: './shop-item-eb.component.html',
  styleUrls: ['./shop-item-eb.component.css']
})
export class ShopItemEBComponent implements OnInit {

  @Input() image: string;
  @Input() text: string;
  @Input() title: string;
  @Input() id: number;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }
}
