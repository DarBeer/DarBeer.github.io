import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Image, IMAGES } from '../../../data/images';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    selectedImage: Image;

    constructor(private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
    }

    getNews(image: Image) {
        this.selectedImage = image;
    }

    goBack(): void {
        this.location.back();
    }

}
