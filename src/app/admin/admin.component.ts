import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataService } from "../data.service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    providers: [DataService]
})
export class AdminComponent implements OnInit {

    images: any;

    constructor(private http: HttpClient, private service: DataService) { }

    ngOnInit() {
        this.getImages();
    }


    getImages() {
        this.service.getImages('http://localhost:3000/data/images').subscribe(res => {
            this.images = res;
    });
    }

}
