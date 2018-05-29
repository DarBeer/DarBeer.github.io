import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './shared/services/user.service';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) {}

  canActivate(username, password, next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (! this.user.setUserLoggedIn(username, password)) {
      this.router.navigate(['/login']);
    } else {
    }
    console.log('You are not admin');
    return this.user.getUserLoggedIn();
  }
}
