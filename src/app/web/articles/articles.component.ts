import { Component, OnInit } from '@angular/core';

import { IMAGES } from '../../../data/images';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    heading = 'Статьи Экспонатов';
    subheading = 'Статьи и их поиск';

    images = IMAGES;

    constructor() {

    }

    ngOnInit() {

    }

}