import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './shared/services/user.service';
import {ErrorPageComponent} from "./login/error-page/error-page.component";

@Injectable()
export class AuthguardGuard implements CanActivate {

  public username = '';
  public password = '';

  constructor(private user: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean {
    if (! this.user.setUserLoggedIn(this.username, this.password)) {
      this.router.navigate(['/login']);
    } else {
    }
    console.log('You are not admin');
    return this.user.getUserLoggedIn();
  }
}
