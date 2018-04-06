import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { ArticlesComponent} from "./articles/articles.component";
import { HistoryComponent} from "./history/history.component";
import { ImageGalleryComponent} from "./image-gallery/image-gallery.component";
import { VideoGalleryComponent} from "./video-gallery/video-gallery.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'articles',
        component: ArticlesComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'image-gallery',
        component: ImageGalleryComponent
    },
    {
        path: 'video-gallery',
        component: VideoGalleryComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
