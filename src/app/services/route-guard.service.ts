import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

 
  constructor(private router :Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean|UrlTree{

        const token =  localStorage.getItem("token");
        if(token){
         
            return true
        }else{
            this.router.navigateByUrl('/login')
        }
       
      }

}
