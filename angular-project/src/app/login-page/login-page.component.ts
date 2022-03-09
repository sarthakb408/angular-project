import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManipulationService } from '../data-manipulation.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(private ht:DataManipulationService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.ht.isLogedIn=true;
    this.router.navigate(['/','home']);
  }
}
