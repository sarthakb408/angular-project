import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
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

<<<<<<< HEAD
  constructor(public ht: DataManipulationService) { }
 
  
  receiveProductsData:any;
=======
  constructor(public ht: DataManipulationService, private modalService: NgbModal, private fb: FormBuilder) { }

  customerList: any;
  myForm: any;
  formIsNew = false;
  emptyForm = {
    "product_name": "",
    "product_category": "",
    "dproduct_description": "",
    "units_available": "",
    "height": "",
    "width": "",
    "price": "",
    "rating": "",
  }
  receiveProductsData: any;
>>>>>>> 9d39076c6a2d133134472b79c5385e25273d36e7
  ngOnInit() {
    this.ht.getProductsData().subscribe((productsData) => this.show(productsData));

    this.myForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductCategory: ['', Validators.required],
      ProductDescriptione: ['', Validators.required],
      UnitAvailable: ['', Validators.required],
      Height: ['', Validators.required],
      Width: ['', Validators.required],
      Price: ['', Validators.required],
      Rating: ['', Validators.required],
    });
  }

  CustomerFormData() {
    console.log(this.myForm.value);
  }


  objectToFormData(objData: any) {

    this.myForm.setValue({
      ProductName: objData.product_name,
      ProductCategory: objData.product_category,
      ProductDescriptione: objData.product_description,
      UnitAvailable: objData.units_available,
      Height: objData.height,
      Width: objData.width,
      Price: objData.price,
      Rating: objData.rating
    });

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


