import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../login.component";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(public login: LoginComponent ) { }

  public username = this.login.login;
  public password = this.login.pass;

  ngOnInit() {
  }

}
