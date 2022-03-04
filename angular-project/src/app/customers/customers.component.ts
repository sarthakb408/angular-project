import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public ht: DataManipulationService, private modalService: NgbModal, private fb: FormBuilder) { }

  customerList: any;
  myForm: any;
  formIsNew = false;
  emptyForm = {
    "first_name": "",
    "last_name": "",
    "date_of_birth": "",
    "current_address": {
      "houseno": "",
      "street": "",
      "city": "",
      "zipcode": ""
    },
    "permenant_address": {
      "houseno": "",
      "street": "",
      "city": "",
      "zipcode": ""
    },
    "email": "",
    "phone_number": ""
  }

  receiveCustomersData: any;
  ngOnInit() {
    this.ht.getCustomersData().subscribe((customersData) => this.show(customersData));


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
  
  show(customersData: any) {
    this.receiveCustomersData = customersData;
  }
}



