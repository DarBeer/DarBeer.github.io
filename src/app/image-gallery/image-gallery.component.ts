import { Component, OnInit } from '@angular/core';

import { Image, IMAGES } from '../../data/images';
import { NgbModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

    heading = 'Галерея Экспонатов';
    subheading = 'Фотографии и их поиск';

    images = IMAGES;
    selectedImage: Image;


    constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
        config.interval = 0;
    }

    openImage(content) {
        this.modalService.open(content, { centered: true, size: 'lg' });
    }

    ngOnInit() {
    }

    onSelect(image: Image): void {
        this.selectedImage = image;
    }

}
