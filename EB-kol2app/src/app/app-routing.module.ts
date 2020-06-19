import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopEBComponent} from './components/shop-eb/shop-eb.component';
import {ShopDetailsEBComponent} from './components/shop-details-eb/shop-details-eb.component';


const routes: Routes = [
  {
    path: '',
    component: ShopEBComponent
  },
  {
    path: 'shop/items/:id',
    component: ShopDetailsEBComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
