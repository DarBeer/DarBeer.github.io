import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

    constructor(private http: HttpClient ) { }

    // GET images
    getImages(url: string): Observable<any> {
        //const url = 'http://localhost:3000/data/images';
        return this.http.get(url);
    }

    // ADD image

    // DELETE image

}