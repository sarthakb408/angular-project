import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManipulationService } from './data-manipulation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  photo = 'https://www.emodal.com/images/hero-banner.png';

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
