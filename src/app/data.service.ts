import { Injectable } from '@angular/core';

import { IMAGES } from '../data/images';

@Injectable()
export class DataService {

    lastData = [];

    last_image = IMAGES[IMAGES.length - 1];

    constructor() {

    }

}
