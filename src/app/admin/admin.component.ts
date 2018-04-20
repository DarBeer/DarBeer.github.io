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
    imageFile = null;

    constructor(private http: HttpClient, private service: DataService, private form: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        this.getImages();
    }

    createForm() {
        this.imageForm = this.form.group({
            heading: ['', Validators.required ],
            description: ['', Validators.required ],
            urlImage: ['', Validators ]
        });
    }

    getImages() {
        this.service.getImages().subscribe(res => {
            this.images = res;
        });
    }

    onSelectedFile(event){
        this.imageName = event.target.files[0].name;
        this.imageFile = event.target.files[0];
        console.log(this.imageFile)
    }

    addImage(heading, description, imageName, uploadData) {
        uploadData = new FormData();
        uploadData.append('galleryImage', this.imageFile);
        this.service.addImage(heading, description, imageName, uploadData);
        console.log(this.imageFile)
    }

}
