import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataManipulationService } from './data-manipulation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private ht: DataManipulationService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.checkLogin();
  }
  
  checkLogin():Observable<boolean> | boolean{
    if(this.ht.isLogedIn==true){
      return true;
    }
    else{
      this.router.navigate(['/','login']);
      return false;
    }
  }
}
