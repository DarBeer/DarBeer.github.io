import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { HistoryComponent } from './history/history.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { PageComponent } from './articles/page/page.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArticlesComponent,
        HistoryComponent,
        ImageGalleryComponent,
        VideoGalleryComponent,
        PageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot()
  ],
    providers: [NgbCarouselConfig],
    bootstrap: [AppComponent]
})
export class AppModule { }
