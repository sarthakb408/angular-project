import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {

  constructor(public ht: DataManipulationService) { }
  receiveBuyersData: any;
  ngOnInit() {
    this.ht.getBuyersData().subscribe((buyersData) => this.show(buyersData));
  }

  show(buyersData: any) {
    this.receiveBuyersData = buyersData;
  }

}
