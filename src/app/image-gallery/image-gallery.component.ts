import { Component, OnInit } from '@angular/core';

import { IMAGES } from '../images';

@Component({
    selector: 'app-image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

    heading = 'Галерея Экспонатов';
    subheading = 'Фотографии и их поиск';

    images = IMAGES;

    constructor() { }

    ngOnInit() {

    }

}
