import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManipulationService } from '../data-manipulation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ht:DataManipulationService,private router:Router) { }

  ngOnInit(): void {
    if(this.ht.isLogedIn)
    {

    }
    else{
      this.router.navigate(['/','login']);
    }
  }
  LogOut()
  {
    this.ht.isLogedIn=false;
    this.router.navigate(['/','login']);
  }


}
