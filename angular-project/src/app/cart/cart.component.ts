import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public ht: DataManipulationService, private modalService: NgbModal, private router: Router) { }

  receiveCartItems:any;
  index:any;
  ngOnInit(): void {
    this.ht.getCartitems().subscribe((data) => this.show(data));
  }

  removeItem(data:any, i:any){
    this.index = i;
    console.log(data);
    this.ht.deleteCartitems(data.id).subscribe();
    this.modalService.dismissAll();
    this.receiveCartItems.splice(this.index, 1);
  }

  show(data: any) {
    this.receiveCartItems = data;
  }

  pay(){
    this.ht.postItemsData(this.receiveCartItems).subscribe((data) => console.log(data));
    this.router.navigate(['/', 'payment'])
  }
}
