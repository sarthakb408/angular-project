import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public ht: DataManipulationService) { }
  receiveSummaryData:any;
  ngOnInit(): void {
    this.ht.getSummaryData().subscribe((data) => this.show(data));
  }
  show(data: any) {
    this.receiveSummaryData = data;
  }
}
