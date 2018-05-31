import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
    declarations: [LoginComponent, ErrorPageComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        RouterModule
    ]
})
export class LoginModule { }
