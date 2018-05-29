import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private  isUserLoggedIn;
  private username = 'sosh2gBobruisk';
  private password = '31047766';

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(login, pass) {
      if (login === this.username && pass === this.password) {
          this.isUserLoggedIn = true;
          return this.getUserLoggedIn();
      } else {
          return this.getUserLoggedIn();
      }
  }

  getUserLoggedIn() {
      return this.isUserLoggedIn;
  }

}
