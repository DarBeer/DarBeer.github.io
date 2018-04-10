import { Injectable } from '@angular/core';

import { IMAGES } from '../data/images';

import { VIDEO } from '../data/videos';

@Injectable()
export class DataService {

    last_image = IMAGES[IMAGES.length - 1];
    last_video = VIDEO[VIDEO.length - 1];
    lastData = [this.last_image, this.last_video];

    constructor() {

    }

}
