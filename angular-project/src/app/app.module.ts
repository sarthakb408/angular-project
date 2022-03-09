import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 9d39076c6a2d133134472b79c5385e25273d36e7

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
<<<<<<< HEAD
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 9d39076c6a2d133134472b79c5385e25273d36e7
import { TablesListMenuComponent } from './tables-list-menu/tables-list-menu.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

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
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
<<<<<<< HEAD
    ClickOutsideModule,
=======
    ReactiveFormsModule
>>>>>>> 9d39076c6a2d133134472b79c5385e25273d36e7
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
