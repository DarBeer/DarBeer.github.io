import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    heading = 'Статьи Экспонатов';
    subheading = 'Статьи и их поиск';

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(res => console.log(res.id))
    }

    ngOnInit() {

    }

}