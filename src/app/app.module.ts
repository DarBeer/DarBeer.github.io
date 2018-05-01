import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { DataService } from "./shared/services/data.service";
import { ArticleService } from "./shared/services/article.service";
import { DashboardModule } from "./dashboard/dashboard.module";
import { WebModule } from "./web/web.module";
import { LoginModule } from "./login/login.module";
import 'bootstrap';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardModule,
        WebModule,
        LoginModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NgbModule.forRoot()
    ],
    providers: [
        DataService,
        ArticleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
