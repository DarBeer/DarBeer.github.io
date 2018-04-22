import { Injectable } from '@angular/core';
//import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    constructor(private http: HttpClient) {

    }

    // GET images
    getImages() {
        const uri = 'http://localhost:3000/data/images';
        return this.http.get(uri);
    }

    // ADD image
    addImage(heading, description, imageName, uploadImage) {
        const uri_data = 'http://localhost:3000/data/image';
        const uri_img = 'http://localhost:3000/data/upload';
        const obj = {
            heading: heading,
            description: description,
            urlImage: imageName,
            date: Date.now()
        };
        this.http
            .post(uri_img, uploadImage)
            .subscribe(res =>
                console.log(res));
        this.http
            .post(uri_data, obj)
            .subscribe(res =>
                console.log(res))
    }

    // DELETE image

}