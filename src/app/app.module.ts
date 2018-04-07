import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { HistoryComponent } from './history/history.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArticlesComponent,
        HistoryComponent,
        ImageGalleryComponent,
        VideoGalleryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
