import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../shared/services/article.service";

import {Article} from "../../dashboard/article-data/article";


@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    heading = 'Статьи Экспонатов';
    subheading = 'Статьи и их поиск';

    private errorMessage: string;
    articles: Article[];
    article: Article;
    artString: string;

    constructor(private service: ArticleService) {

    }

    ngOnInit() {
    // GET article
        this.service.getArticles()
            .subscribe(
                articles => this.articles = articles,
                error => this.errorMessage = error
            )
    }

    searchArticle(value){
        if(!value) this.service.getArticles()
            .subscribe(
                articles => this.articles = articles,
                error => this.errorMessage = error
            );
        this.service.getArticles()
            .subscribe(
                articles => {
                    this.articles = Object.assign([], articles).filter(
                        article =>
                            article.heading.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
                            article.description.toLowerCase().indexOf(value.toLowerCase()) > -1
                    )
                },
                error => this.errorMessage = error
            )
    }

}