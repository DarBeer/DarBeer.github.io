import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { HistoryComponent } from './history/history.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { PageComponent } from './articles/page/page.component';
import { AdminComponent } from './admin/admin.component';
import { DataService } from "./data.service";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArticlesComponent,
        HistoryComponent,
        ImageGalleryComponent,
        VideoGalleryComponent,
        PageComponent,
        AdminComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NgbModule.forRoot()
  ],
    providers: [NgbCarouselConfig, DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
