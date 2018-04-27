import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Image } from '../../dashboard/image-data/image';
import 'rxjs/add/operator/map';



@Injectable()
export class DataService {

    constructor(private http: HttpClient) {

    }

    // GET images
    getImages(): Observable<Image[]> {
        const uri = 'http://localhost:3000/data/images';
        return this
            .http
            .get<Image[]>(uri)
            .map(res => {
                return res;
            });
    }


    /*
    addImage(heading, description, imageName, uploadImage) {
        const uri_data = 'http://localhost:3000/data/images/add';
        const uri_img = 'http://localhost:3000/data/images/upload';
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
    */

    // ADD image
    addImage(heading, description, imageName, img): Observable<Image> {
        const uri = 'http://localhost:3000/data/images/add';
        const uri_img = 'http://localhost:3000/data/images/upload';
        const headers = new HttpHeaders();
        const obj = {
            heading: heading,
            description: description,
            urlImage: imageName,
            date: Date.now()
        };
        this.http
            .post(uri_img, img)
            .map(res => {
                return res;
            });
        return this.http
            .post<Image>(uri, obj,{headers:headers})
            .map(res => {
                return res;
            });
    }


    // EDIT image

    // UPDATE image

    // DELETE image
    delImage(id) {
        const uri = 'http://localhost:3000/data/images/delete/' + id;
        return this
            .http
            .get(uri)
            .map(res => {
                return res;
            });
    }

}