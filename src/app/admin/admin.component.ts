import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { DataService } from "../data.service";
import { FormGroup,  FormBuilder,  Validators } from "@angular/forms";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

    imageForm: FormGroup;
    images: any;
    imageName: string;

    constructor(private http: HttpClient, private service: DataService, private form: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.imageForm = this.form.group({
            heading: ['', Validators.required ],
            description: ['', Validators.required ],
            urlImage: ['', Validators.required ]
        });
    }

    addImage(heading, description, urlImage) {
        this.service.addImage(heading, description, urlImage);
    }

    onSelectedFile(event){
        this.imageName = event.target.files[0].name;
    }

    ngOnInit() {
        this.getImages();
    }

    getImages() {
        this.service.getImages().subscribe(res => {
            this.images = res;
    });
    }

}
