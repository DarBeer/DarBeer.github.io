import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

import { IMAGES } from '../data/images';
import { VIDEO } from '../data/videos';



@Injectable()
export class DataService {

    /*
    last_image = IMAGES[IMAGES.length - 1];
    last_video = VIDEO[VIDEO.length - 1];
    lastData = [this.last_image.urlImage, this.last_video.urlImage];

    getData(): Observable<lastData[]> {
        return of(HEROES);
    }
*/
    constructor() {

    }

}