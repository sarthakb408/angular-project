import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor(public ht:HttpClient) { }
  getCustomersData(){
    return this.ht.get("http://localhost:3000/customer_details");
  }
  getProductsData(){
    return this.ht.get("http://localhost:3000/product");
  }
  getBuyersData(){
    return this.ht.get("http://localhost:3000/buyer_details");
  }




  flag=false;
  toggle(){
    if(this.flag==false){
      this.flag=true;
    }
    else{
      this.flag=false;
    }
  }
}
