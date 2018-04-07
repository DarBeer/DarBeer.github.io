import { Component, OnInit } from '@angular/core';

import { Image } from '../image'
import { ImageService } from "../image.service";

@Component({
    selector: 'app-image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

    images: Image[];

    constructor( private imageService: ImageService) { }

    ngOnInit() {
        this.getImages();
    }

    getImages(): void {
        this.imageService.getImages()
            .subscribe(images => this.images = images);
    }

}
