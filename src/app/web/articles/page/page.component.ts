import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from "../../../shared/services/article.service";
import { Article } from "../../../dashboard/article-data/article";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    private errorMessage: string;

    heading = 'Статьи Экспонатов';
    subheading = 'Статьи и их поиск';
    article: Article = new Article();

    constructor(private service: ArticleService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {

        this.route.params
            .switchMap((params: Params) => this.service.getArticle(params['id']))
            .subscribe(
                article => this.article = article,
                error => this.errorMessage = error
                );
    }

    goBack(): void {
        this.location.back();
    }

}
