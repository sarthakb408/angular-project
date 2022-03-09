import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public ht: DataManipulationService, private modalService: NgbModal, private fb: FormBuilder) { }

  customerList: any;
  myForm: any;
  data:any;
  updatedFormData:any;
  formIsNew = false;
  emptyForm = {
    "id":  Math.floor(Math.random() * 1000000),
    "product_name": "",
    "product_category": "",
    "product_description": "",
    "units_available": "",
    "height": "",
    "width": "",
    "price": "",
    "rating": "",
  }
  receiveProductsData: any;
  ngOnInit() {
    this.ht.getProductsData().subscribe((productsData) => this.show(productsData));

    this.myForm = this.fb.group({
      Id: [""],
      ProductName: ['', Validators.required],
      ProductCategory: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      UnitAvailable: ['', Validators.required],
      Height: ['', Validators.required],
      Width: ['', Validators.required],
      Price: ['', Validators.required],
      Rating: ['', Validators.required],
    });
  }

  ProductFormData() {
    console.log(this.myForm.value);
    this.updatedFormData = {
      "id": this.myForm.value.Id,
      "product_name": this.myForm.value.ProductName,
    "product_category": this.myForm.value.ProductCategory,
      "product_description": this.myForm.value.ProductDescription,
      "units_available": this.myForm.value.UnitAvailable,
      "height": this.myForm.value.Height,
      "width": this.myForm.value.Width,
    "price": this.myForm.value.Price,
    "rating": this.myForm.value.Rating
    }
    console.log(this.updatedFormData);

    this.ht.putProductsData(this.updatedFormData).subscribe((data) => console.log(data));
  }


  objectToFormData(objData: any) {

    this.myForm.setValue({
      Id: objData.id,
      ProductName: objData.product_name,
      ProductCategory: objData.product_category,
      ProductDescription: objData.product_description,
      UnitAvailable: objData.units_available,
      Height: objData.height,
      Width: objData.width,
      Price: objData.price,
      Rating: objData.rating
    });

  }

  postCustomerFormData(){console.log(this.myForm.value);
    this.updatedFormData = {
      "id": this.myForm.value.Id,
      "product_name": this.myForm.value.ProductName,
    "product_category": this.myForm.value.ProductCategory,
      "product_description": this.myForm.value.ProductDescription,
      "units_available": this.myForm.value.UnitAvailable,
      "height": this.myForm.value.Height,
      "width": this.myForm.value.Width,
    "price": this.myForm.value.Price,
    "rating": this.myForm.value.Rating
    }

    console.log(this.updatedFormData);

    this.ht.postProductsData(this.updatedFormData).subscribe((data) => console.log(data));
  }

  deleteProduct(data:any){
    console.log(data);
    this.ht.deleteProductsData(data.id).subscribe();
    this.modalService.dismissAll();
  }
   
  cartItems:any;
  buyItem(data:any){
    console.log(data);
    this.cartItems=data;
    this.cartItems.units_available=1;
    this.ht.postBuyItemCart(this.cartItems).subscribe((data) => console.log(data));
  }

  closeResult = '';
  open(content: any, data: any) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });


    console.log(data)
    if (data) {
      this.formIsNew = false;
      this.objectToFormData(data);
    }
    else {
      this.formIsNew = true;
      this.objectToFormData(this.emptyForm);
    }

  }
  show(productsData: any) {
    this.receiveProductsData = productsData;
  }
}


