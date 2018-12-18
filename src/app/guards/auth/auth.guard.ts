import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { FbService } from '../../services/facebook/facebook.service';
import { LoginStatus } from 'ngx-facebook';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private fb: FbService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.fb.getLoginStatus().then((status: LoginStatus) => {
      console.log(status)
      if (status.status === 'connected') {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}
