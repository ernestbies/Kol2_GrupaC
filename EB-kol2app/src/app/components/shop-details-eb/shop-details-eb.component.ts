import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'shop-details-eb',
  templateUrl: './shop-details-eb.component.html',
  styleUrls: ['./shop-details-eb.component.css']
})
export class ShopDetailsEBComponent implements OnInit {

  public image = '';
  public text = '';
  public title = '';
  public price: number;
  public id: number;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let id: string = '';

    this.route.paramMap.subscribe(params => {
      id = params.get('id');
    });

    this.dataService.getById(id).subscribe(res => {
      this.id = res['id'];
      this.image = res['image'];
      this.text = res['text'];
      this.title = res['title'];
      this.price = res['price'];
    }, error => {
      this.router.navigate(['/']);
    });
  }
}
