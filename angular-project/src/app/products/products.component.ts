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
  formIsNew = false;
  emptyForm = {
    "product_name": "",
    "product_category": "",
    "dproduct_description": "",
    "units_available": "",
      "houseno": "",
      "street": "",
      "city": "",
      "zipcode": "",
    
    "permenant_address": {
      "houseno": "",
      "street": "",
      "city": "",
      "zipcode": ""
    },
    "email": "",
    "phone_number": ""
  }
  receiveProductsData: any;
  ngOnInit() {
    this.ht.getProductsData().subscribe((productsData) => this.show(productsData));

    this.myForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Birthdate: ['', Validators.required],
      CurrentAddress: ['', Validators.required],
      CurrenthouseNo: ['', Validators.required],
      CurrentCity: ['', Validators.required],
      CurrentState: ['', Validators.required],
      CurrentZip: ['', Validators.required],
      ParmanentAddress: ['', Validators.required],
      ParmanenthouseNo: ['', Validators.required],
      ParmanentCity: ['', Validators.required],
      ParmanentState: ['', Validators.required],
      ParmanentZip: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]

    });
  }

  CustomerFormData() {
    console.log(this.myForm.value);
  }


  objectToFormData(objData: any) {

    this.myForm.setValue({
      FirstName: objData.first_name,
      LastName: objData.last_name,
      Birthdate: objData.date_of_birth,
      CurrentAddress: objData.current_address.street,
      CurrenthouseNo: objData.current_address.houseno,
      CurrentCity: objData.current_address.city,
      CurrentState: objData.current_address.city,
      CurrentZip: objData.current_address.zipcode,
      ParmanentAddress: objData.permenant_address.street,
      ParmanenthouseNo: objData.permenant_address.houseno,
      ParmanentCity: objData.permenant_address.city,
      ParmanentState: objData.permenant_address.city,
      ParmanentZip: objData.permenant_address.zipcode,
      Email: objData.email,
      PhoneNumber: objData.phone_number,

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


// "product_id": 1,
//             "product_name": "Brown eggs",
//             "product_category": "dairy",
//             "product_description": "Raw organic brown eggs in a basket",
//             "units_available": 25,
//             "height": 600,
//             "width": 400,
//             "price": 28.1,
//             "rating": 4