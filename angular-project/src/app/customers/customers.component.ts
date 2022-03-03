import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public ht: DataManipulationService) { }

  receiveCustomersData:any;
  ngOnInit() {
    this.ht.getCustomersData().subscribe((customersData) => this.show(customersData));
  }

  show(customersData: any) {
    this.receiveCustomersData = customersData;
  }

}
