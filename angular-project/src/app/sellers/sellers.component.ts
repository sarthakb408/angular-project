import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  constructor(public ht: DataManipulationService) { }
  receiveSellersData: any;
  ngOnInit() {
    this.ht.getSellersData().subscribe((sellersData) => this.show(sellersData));
  }

  show(sellersData: any) {
    this.receiveSellersData = sellersData;
  }

}
