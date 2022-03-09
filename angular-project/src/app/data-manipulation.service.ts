import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor(public ht:HttpClient) { }

  isLogedIn=false;

  getCustomersData(){
    return this.ht.get("http://localhost:3000/customer_details");
  }
  putCustomersData(data:any) {
    return this.ht.put("http://localhost:3000/customer_details/"+data.id, data);
  }
  deleteCustomerData(id:any) {
    console.log(id);
    return this.ht.delete("http://localhost:3000/customer_details/"+id);
  }
  postCustomerData(data: any) {
    return this.ht.post("http://localhost:3000/customer_details", data);
  }


  getProductsData(){
    return this.ht.get("http://localhost:3000/product");
  }
  putProductsData(data:any) {
    return this.ht.put("http://localhost:3000/product/"+data.id, data);
  }
  deleteProductsData(id:any) {
    return this.ht.delete("http://localhost:3000/product/"+id);
  }
  postProductsData(data: any) {
    return this.ht.post("http://localhost:3000/product", data);
  }

  
  getBuyersData(){
    return this.ht.get("http://localhost:3000/buyer_details");
  }
<<<<<<< HEAD
  putBuyersData(data:any) {
    return this.ht.put("http://localhost:3000/buyer_details/"+data.id, data);
  }
  deleteBuyersData(id:any) {
    return this.ht.delete("http://localhost:3000/buyer_details/"+id);
  }
  postBuyersData(data: any) {
    return this.ht.post("http://localhost:3000/buyer_details", data);
  }


=======
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
>>>>>>> 0f1a4fa935f48646f2f9832605e69dc889ba677d
  getSellersData(){
    return this.ht.get("http://localhost:3000/seller_details");
>>>>>>> 9d39076c6a2d133134472b79c5385e25273d36e7
  }

  postBuyItemCart(data:any){
    return this.ht.post("http://localhost:3000/cart", data);
  }

  getCartitems(){
    return this.ht.get("http://localhost:3000/cart");
  }
  deleteCartitems(id:any){
    return this.ht.delete("http://localhost:3000/cart/"+id);
  }

  postItemsData(data:any){
    return this.ht.post("http://localhost:3000/summary", data);
  }
  getSummaryData(){
    return this.ht.get("http://localhost:3000/cart");
  }
}


