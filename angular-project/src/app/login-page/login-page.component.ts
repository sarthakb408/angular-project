import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { DataManipulationService } from '../data-manipulation.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(private ht:DataManipulationService,private router:Router,private fb:FormBuilder) { }

  loginForm:any;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  flag=false;


  login(Form:any){
    console.log(Form.username+" "+Form.password);
    if(Form.value.username=="admin"&&Form.value.password=="admin123")
    {
      this.flag = true;
      setTimeout(() => {this.flag = false;},6000);
      this.ht.isLogedIn=true;
      this.router.navigate(['/','home']);
    }
    else{
      alert("Provide Proper Details!!");
    }

  }
}
