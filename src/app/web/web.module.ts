import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { OrderModule } from "ngx-order-pipe";
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { WebComponent } from './web.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { HistoryComponent } from './history/history.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { PageComponent } from './articles/page/page.component';


@NgModule({
    declarations: [
        WebComponent,
        HomeComponent,
        ArticlesComponent,
        HistoryComponent,
        ImageGalleryComponent,
        VideoGalleryComponent,
        PageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        OrderModule,
        FormsModule,
        NgxPaginationModule
    ],
    exports: [
        RouterModule
    ]

})
export class WebModule { }
