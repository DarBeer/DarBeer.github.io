import { Injectable } from '@angular/core';
//import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    constructor(private http: HttpClient ) {

    }

    // GET images
    getImages(): Observable<any> {
        const uri = 'http://localhost:3000/data/images';
        return this.http.get(uri);
    }

    // ADD image
    addImage(heading, description, urlImage) {
        const uri = 'http://localhost:3000/data/image';
        const obj = {
            heading: heading,
            description: description,
            urlImage: urlImage,
            date: Date.now()
        };
        this.http
            .post(uri, obj)
            .subscribe(res =>
                console.log('Done'));
    }

    // DELETE image

}