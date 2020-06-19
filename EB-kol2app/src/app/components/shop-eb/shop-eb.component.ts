import { Component, OnInit } from '@angular/core';
import {EbDataService} from "../../services/eb-data.service";

@Component({
  selector: 'shop-eb',
  templateUrl: './shop-eb.component.html',
  styleUrls: ['./shop-eb.component.css']
})
export class ShopEBComponent implements OnInit {

  public items$: any;

  constructor(private service: EbDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.service.getAll().subscribe(response =>{
      this.items$ = response;
    });
  }
}
