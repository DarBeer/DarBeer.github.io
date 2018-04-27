import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { IMAGES } from '../../../data/images';
import { DataService } from "../../shared/services/data.service";
import { Image } from "../../dashboard/image-data/image";


@Component({
    selector: 'app-image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

    heading = 'Галерея Экспонатов';
    subheading = 'Фотографии и их поиск';

    private errorMessage: string;
    images: Image[];
    image: Image;
    //images = IMAGES;
    selectedImage: Image;


    constructor(private modalService: NgbModal, private service: DataService) {
    }

    ngOnInit() {
        this.service.getImages()
            .subscribe(
                images => this.images = images,
                error => this.errorMessage = error
            )
    }

    openImage(content) {
        this.modalService.open(content, { centered: true, size: 'lg' });
    }

    onSelect(image: Image): void {
        this.selectedImage = image;
    }

}
