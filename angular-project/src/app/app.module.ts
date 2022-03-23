import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal , NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { BuyersComponent } from './buyers/buyers.component';
import { SellersComponent } from './sellers/sellers.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { TablesListMenuComponent } from './tables-list-menu/tables-list-menu.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { LoaderComponent } from './loader/loader.component';
import { HistoryComponent } from './history/history.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    CustomersComponent,
    ProductsComponent,
    BuyersComponent,
    SellersComponent,
    ServicesComponent,
    TablesListMenuComponent,
    CartComponent,
    PaymentComponent,
    LoaderComponent,
    HistoryComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
