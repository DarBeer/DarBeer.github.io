import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../../shared/services/data.service";
import { FormGroup,  FormBuilder,  Validators } from "@angular/forms";

@Component({
    selector: 'app-image-data',
    templateUrl: './image-data.component.html',
    styleUrls: ['./image-data.component.scss']
})
export class ImageDataComponent implements OnInit {

    imageForm: FormGroup;
    images: any;
    imageFile: File = null;

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
        this.imageFile = <File>event.target.files[0];
    }

    addImage(heading, description, imageName, uploadImage) {
        uploadImage = new FormData();
        uploadImage.append('galleryImage', this.imageFile, this.imageFile.name);
        imageName = this.imageFile.name;
        this.service.addImage(heading, description, imageName, uploadImage);
    }

}
