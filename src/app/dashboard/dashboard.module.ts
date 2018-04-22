import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from "@angular/common/http";

import { DashboardComponent } from './dashboard.component';
import { ImageDataComponent } from './image-data/image-data.component';
import { VideoDataComponent } from './video-data/video-data.component';
import { ArticleDataComponent } from './article-data/article-data.component';


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
        HttpClientModule
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardModule { }
