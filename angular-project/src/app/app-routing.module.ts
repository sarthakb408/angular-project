import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BuyersComponent } from './buyers/buyers.component';
import { CartComponent } from './cart/cart.component';
import { CustomersComponent } from './customers/customers.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { SellersComponent } from './sellers/sellers.component';
import { ServicesComponent } from './services/services.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'buyers', component: BuyersComponent, canActivate: [AuthGuard] },
  { path: 'sellers', component: SellersComponent,canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent,canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent ,canActivate: [AuthGuard]},
  { path: 'payment', component: PaymentComponent,canActivate: [AuthGuard] },
  { path: 'success', component: SuccessComponent,canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent,canActivate: [AuthGuard] },
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
