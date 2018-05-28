import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './shared/services/user.service';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (! this.user.getUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
    console.log('You are not admin');
    return this.user.getUserLoggedIn();
  }
}
