import { Component, OnInit } from '@angular/core';

import { VIDEO } from '../../data/videos';

@Component({
    selector: 'app-video-gallery',
    templateUrl: './video-gallery.component.html',
    styleUrls: ['./video-gallery.component.scss']
})
export class VideoGalleryComponent implements OnInit {

    heading = 'Видео Галерея';
    subheading = 'Одобрено роскомнадзором';

    videos = VIDEO;

    constructor() { }

    ngOnInit() {

    }

}
