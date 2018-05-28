import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./web/home/home.component";
import { ArticlesComponent} from "./web/articles/articles.component";
import { HistoryComponent} from "./web/history/history.component";
import { ImageGalleryComponent} from "./web/image-gallery/image-gallery.component";
import { VideoGalleryComponent} from "./web/video-gallery/video-gallery.component";
import { PageComponent } from './web/articles/page/page.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ImageDataComponent } from "./dashboard/image-data/image-data.component";
import { VideoDataComponent } from "./dashboard/video-data/video-data.component";
import { ArticleDataComponent } from "./dashboard/article-data/article-data.component";
import { WebComponent } from "./web/web.component";
import { LoginComponent } from "./login/login.component";
// import { UserService } from '../shader/service/user.service';
import {AuthguardGuard} from "./authguard.guard";

const routes: Routes = [
    { path: '', component: WebComponent, children : [
            { path: '', component: HomeComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'articles', component: ArticlesComponent },
            { path: 'articles/:id', component: PageComponent },
            { path: 'image-gallery', component: ImageGalleryComponent },
            { path: 'video-gallery', component: VideoGalleryComponent }
        ]
    },
    { path: 'admin', component: DashboardComponent, canActivate: [AuthguardGuard], children: [
            { path: 'image-data', component: ImageDataComponent },
            { path: 'video-data', component: VideoDataComponent },
            { path: 'article-data', component: ArticleDataComponent }
        ]
    },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [AuthguardGuard],
    exports: [RouterModule]
})
export class AppRoutingModule { }
