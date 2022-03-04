import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  constructor(public ht: DataManipulationService, private modalService: NgbModal, private fb: FormBuilder) { }

  customerList: any;
  myForm: any;
  formIsNew = false;
  emptyForm = {
    "id": 1,
    "seller_name": "",
    "seller_email": "",
    "seller_address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": ""
    },
    "phone": "",
    "website": ""
  }

  receiveSellersData: any;
  ngOnInit() {
    this.ht.getSellersData().subscribe((sellersData) => this.show(sellersData));


    this.myForm = this.fb.group({
      SellerName: ['', Validators.required],
      SellerEmail: ['', Validators.required],
      SellerAddress: ['', Validators.required],
      SellerSuite: ['', Validators.required],
      SellerCity: ['', Validators.required],
      SellerZip: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Website: ['', Validators.required],

    });
  }

  CustomerFormData() {
    console.log(this.myForm.value);
  }


  objectToFormData(objData: any) {

    this.myForm.setValue({
      SellerName: objData.seller_name,
      SellerEmail: objData.seller_email,
      SellerAddress: objData.seller_address.street,
      SellerSuite: objData.seller_address.suite,
      SellerCity: objData.seller_address.city,
      SellerZip: objData.seller_address.zipcode,
      PhoneNumber: objData.phone,
      Website: objData.website,
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

  show(sellersData: any) {
    this.receiveSellersData = sellersData;
  }

}
