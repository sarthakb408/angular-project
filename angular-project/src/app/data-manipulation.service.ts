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
  putCustomersData(data:any) {
    return this.ht.put("http://localhost:3000/customer_details/"+data.id, data);
  }
  deleteCustomerData(id:any) {
    return this.ht.delete("http://localhost:3000/customer_details"+id);
  }
  postCustomerData(data: any) {
    return this.ht.post("http://localhost:3000/customer_details", data);
  }
  getProductsData(){
    return this.ht.get("http://localhost:3000/product");
  }
  getBuyersData(){
    return this.ht.get("http://localhost:3000/buyer_details");
  }
<<<<<<< HEAD




  flag=false;
  toggle(){
    if(this.flag==false){
      this.flag=true;
    }
    else{
      this.flag=false;
    }
=======
  getSellersData(){
    return this.ht.get("http://localhost:3000/seller_details");
>>>>>>> 9d39076c6a2d133134472b79c5385e25273d36e7
  }
}
