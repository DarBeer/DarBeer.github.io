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
    articles: Article[];
    article: Article;

    constructor(private service: ArticleService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        //this.route.params.subscribe(params => console.log(params));

        // https://www.concretepage.com/angular-2/angular-2-routing-and-navigation-example#params
        /*
        this.route.params
            .switchMap((params: Params) => this.bookService.getBook(+params['id']))
            .subscribe(book => this.book = book);
            */

        /*
        this.route.params
            .switchMap((params: Params) => this.service.getArticle(+params['id']))
            .subscribe(article => {
                this.articles = article;
                console.log(this.articles)
            });
        */

        /*
        this.route.params.subscribe(params => {
                console.log(params);
                this.service.getArticle(params)
                    .subscribe(article => {
                        this.articles = article;
                        console.log(this.articles)
                });
            }
        );
        */

    }

    goBack(): void {
        this.location.back();
    }

}
