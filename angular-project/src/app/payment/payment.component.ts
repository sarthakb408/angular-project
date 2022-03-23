import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public ht: DataManipulationService, private router: Router) { }
  receiveSummaryData:any;
  ngOnInit(): void {
    this.ht.getSummaryData().subscribe((data) => this.show(data));
  }
  show(data: any) {
    this.receiveSummaryData = data;
  }

  addHistory(){
    this.ht.postHistory(this.receiveSummaryData).subscribe((data) => console.log(data));
    this.router.navigate(['/', 'success']);
  }
  showsuccess(){
    this.ht.postHistory(this.receiveSummaryData).subscribe((data) => console.log(data));
    this.router.navigate(['/', 'success']);
  }
}
