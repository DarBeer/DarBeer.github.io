import { Injectable } from '@angular/core';

import { IMAGES } from '../data/images';

import { VIDEO } from '.../data/videos';

@Injectable()
export class DataService {

    lastData = [];

    last_image = IMAGES[IMAGES.length - 1];
    lastData[0] = last_image;

    last_vine = VIDEO[VIDEO.length - 1];
    lastData[1] = last_vine;

    //last_post =
    //lastData[2] = last_post;

    //last_post =
    //lastData[3] = last_post;

    constructor() {

    }

}
