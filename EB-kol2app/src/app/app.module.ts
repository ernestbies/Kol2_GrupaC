import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopEBComponent } from './components/shop-eb/shop-eb.component';
import { ShopItemEBComponent } from './components/shop-item-eb/shop-item-eb.component';
import { ShopDetailsEBComponent } from './components/shop-details-eb/shop-details-eb.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { HttpClientModule } from "@angular/common/http";
import { EbDataService } from "./services/eb-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ShopEBComponent,
    ShopItemEBComponent,
    ShopDetailsEBComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EbDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
