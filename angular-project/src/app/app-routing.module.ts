import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyersComponent } from './buyers/buyers.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsComponent } from './products/products.component';
import { SellersComponent } from './sellers/sellers.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'customers',component:CustomersComponent},
  {path:'products',component:ProductsComponent},
  {path:'buyers',component:BuyersComponent},
  {path:'sellers',component:SellersComponent},
  {path:'services',component:ServicesComponent},
  {path:'',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
