import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import {Article} from "../../dashboard/article-data/article";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ArticleService} from "../../shared/services/article.service";
import { Image } from "../../dashboard/image-data/image";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    heading = 'Виртуальный музей';
    subheading = 'Учреждения образования средней школы №2 г. Бобруйска';

    articles: Article[];
    article: Article;
    artString: string;

    private errorMessage: string;
    images: Image[];
    image: Image;
    imgString: string;

    lastData = [];

    constructor(private aService: ArticleService, private modalService: NgbModal, private iService: DataService) {

    }

    ngOnInit() {
        // GET article
        this.aService.getArticles()
            .subscribe(
                articles => this.articles = articles,
                error => this.errorMessage = error
            );

        this.iService.getImages()
            .subscribe(
                images => this.images = images,
                error => this.errorMessage = error
            )
    }

    openImage(content) {
        this.modalService.open(content, { centered: true, size: 'lg' });
    }

    onSelect(image: Image): void {
        this.image = image;
    }

}
