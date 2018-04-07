import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Image } from './image';
import { IMAGES } from './mock-images';

@Injectable()
export class ImageService {

    constructor() { }

    getImages(): Observable<Image[]> {
        return of(IMAGES);
    }

}
