import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public ht: DataManipulationService) { }
  receiveProductsData:any;
  ngOnInit() {
    this.ht.getProductsData().subscribe((productsData) => this.show(productsData));
  }

  show(productsData: any) {
    this.receiveProductsData = productsData;
  }
}
