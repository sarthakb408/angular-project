import { Component, OnInit } from '@angular/core';
import { DataManipulationService } from '../data-manipulation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public ht: DataManipulationService, private router: Router) { }
  receiveHistoryData:any;
  ngOnInit(): void {
    this.ht.getHistory().subscribe((data) => this.show(data));

  }

  i:any=0;
  show(data: any) {
    console.log(data[0][0]);
    console.log(data.length);
    
    for(this.i=1;this.i<data.length;this.i++){
      
      this.receiveHistoryData = data[this.i];
    }
  }
}
