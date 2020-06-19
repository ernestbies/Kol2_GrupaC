import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'shop-eb',
  templateUrl: './shop-eb.component.html',
  styleUrls: ['./shop-eb.component.css']
})
export class ShopEBComponent implements OnInit {

  public items$: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.service.getAll().subscribe(response =>{
      this.items$ = response;
    });
  }
}
