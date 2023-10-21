import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGaurd implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.loginService.getUserRole();

    if (route.data['roles'].includes(userRole)) {
      return true; // User has the required role, allow access
    } else if (!userRole) {
      this.router.navigate(['']); // Navigate to sign-in page if userRole is undefined
      return false;
    } else {
      alert('Access Denied');
      this.router.navigate(['dashboard']); //navigate to home if unauthorised url entry by other users
      return false;
    }
  }
}


