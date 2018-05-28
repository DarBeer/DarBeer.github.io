import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from '../app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from "@angular/common/http";
import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { CdkTableModule } from '@angular/cdk/table';
import {
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule
} from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { ImageDataComponent } from './image-data/image-data.component';
import { VideoDataComponent } from './video-data/video-data.component';
import { ArticleDataComponent } from './article-data/article-data.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import {LoginComponent} from '../login/login.component';
import {AuthguardGuard} from '../authguard.guard';
import {UserService} from '../shared/services/user.service';

const Materials = [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule
];

// const appRoutes: Routes = [
//     path: 'login',
//     {
//             component: LoginComponent
//     },
//     {
//         path: 'admin',
//         component: DashboardComponent,
//         canActivate: [AuthguardGuard]
//     }
// ];

@NgModule({
    declarations: [
        DashboardComponent,
        ImageDataComponent,
        VideoDataComponent,
        ArticleDataComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right'
        }),
        OrderModule,
        FroalaEditorModule.forRoot(),
        Materials
    ],
    providers: [AuthguardGuard],
    exports: [
        CdkTableModule,
        Materials
    ]
})
export class DashboardModule { }
