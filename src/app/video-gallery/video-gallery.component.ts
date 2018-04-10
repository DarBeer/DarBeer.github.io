import { Component, OnInit } from '@angular/core';

import {Video, VIDEO} from '../../data/videos';

import { NgbModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-video-gallery',
    templateUrl: './video-gallery.component.html',
    styleUrls: ['./video-gallery.component.scss']
})
export class VideoGalleryComponent implements OnInit {

    heading = 'Видео Галерея';
    subheading = 'Одобрено Роскомнадзором';

    videos = VIDEO;
    selectedVideo: Video;

    constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
        config.interval = 0;
    }
    ngOnInit() {

    }

    openVideo(content) {
        this.modalService.open(content, { centered: true, size: 'lg' });
    }


    OnSelect(video: Video): void {
        this.selectedVideo = video;
    }

}
