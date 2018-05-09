import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    imgString: string;

    constructor(private modalService: NgbModal, private service: DataService) {
    }

    ngOnInit() {
        this.service.getImages()
            .subscribe(
                images => this.images = images,
                error => this.errorMessage = error
            )
    }

    searchImage(value){
        if(!value) this.service.getImages()
            .subscribe(
                images => this.images = images,
                error => this.errorMessage = error
            );
        this.service.getImages()
            .subscribe(
                images => {
                    this.images = Object.assign([], images).filter(
                    image =>
                        image.heading.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
                        image.description.toLowerCase().indexOf(value.toLowerCase()) > -1
                    )
                },
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
