import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {

  constructor(public ht: DataManipulationService, private modalService: NgbModal, private fb: FormBuilder) { }

  customerList: any;
  myForm: any;
  formIsNew = false;
  updatedFormData:any;
  emptyForm = {
    "id":  Math.floor(Math.random() * 1000000),
    "buyer_name": "",
    "buyer_email": "",
    "buyer_address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": ""
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": ""
    }
  }

  receiveBuyersData: any;
  ngOnInit() {
    this.ht.getBuyersData().subscribe((buyersData) => this.show(buyersData));


    this.myForm = this.fb.group({
      Id: [""],
      BuyerName: ['', Validators.required],
      BuyerEmail: ['', Validators.required],
      BuyerAddress: ['', Validators.required],
      BuyerSuite: ['', Validators.required],
      BuyerCity: ['', Validators.required],
      BuyerZip: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Website: ['', Validators.required],
      CompanyName: ['', Validators.required],
      CatchPhrase: ['', Validators.required],

    });
  }

  BuyerFormData() {
    console.log(this.myForm.value);
    this.updatedFormData = {
      "id": this.myForm.value.Id,
      "buyer_name": this.myForm.value.BuyerName,
    "buyer_email": this.myForm.value.BuyerEmail,
      "buyer_address": {
        "street":this.myForm.value.BuyerAddress,
        "suite":this.myForm.value.BuyerSuite,
        "city":this.myForm.value.BuyerCity,
        "zipcode":this.myForm.value.BuyerZip,
      },
      "phone": this.myForm.value.PhoneNumber,
      "website": this.myForm.value.Website,
      "company": {
        "name":this.myForm.value.CompanyName,
    "catchPhrase": this.myForm.value.CatchPhrase
      }
    }
    console.log(this.updatedFormData);

    this.ht.putBuyersData(this.updatedFormData).subscribe((data) => console.log(data));
  }

  postBuyerFormData(){
    console.log(this.myForm.value);
    this.updatedFormData = {
      "id": this.myForm.value.Id,
      "buyer_name": this.myForm.value.BuyerName,
    "buyer_email": this.myForm.value.BuyerEmail,
      "buyer_address": {
        "street":this.myForm.value.BuyerAddress,
        "suite":this.myForm.value.BuyerSuite,
        "city":this.myForm.value.BuyerCity,
        "zipcode":this.myForm.value.BuyerZip,
      },
      "phone": this.myForm.value.PhoneNumber,
      "website": this.myForm.value.Website,
      "company": {
        "name":this.myForm.value.CompanyName,
    "catchPhrase": this.myForm.value.CatchPhrase
      }
    }
    console.log(this.updatedFormData);

    this.ht.postBuyersData(this.updatedFormData).subscribe((data) => console.log(data));
  }


  deleteBuyer(data:any){
    console.log(data);
    this.ht.deleteBuyersData(data.id).subscribe();
    this.modalService.dismissAll()
  }

  objectToFormData(objData: any) {

    this.myForm.setValue({
      Id: objData.id,
      BuyerName: objData.buyer_name,
      BuyerEmail: objData.buyer_email,
      BuyerAddress: objData.buyer_address.street,
      BuyerSuite: objData.buyer_address.suite,
      BuyerCity: objData.buyer_address.city,
      BuyerZip: objData.buyer_address.zipcode,
      PhoneNumber: objData.phone,
      Website: objData.website,
      CompanyName: objData.company.name,
      CatchPhrase: objData.company.catchPhrase
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

  show(buyersData: any) {
    this.receiveBuyersData = buyersData;
  }

}
// "id": 1,
//     "buyer_name": "Leanne Graham",
//     "buyer_email": "Sincere@april.biz",
//     "buyer_address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874"
//     },
//     "phone": "17707368031",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net"
//     }