import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from "../../shared/services/data.service";
import { FormGroup,  FormBuilder,  Validators } from "@angular/forms";
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Image } from './image'

@Component({
    selector: 'app-image-data',
    templateUrl: './image-data.component.html',
    styleUrls: ['./image-data.component.scss']
})
export class ImageDataComponent implements OnInit, AfterViewInit {

    private errorMessage: string;
    images: Image[];
    image: Image;

    imageForm: FormGroup;
    imageFile: File = null;
    //displayedColumns = ['heading','description','image','date'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private service: DataService, private form: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        //this.getImages();
        this.service.getImages()
            .subscribe(
                images => this.images = images,
                error => this.errorMessage = error
            )
    }

    ngAfterViewInit() {
        //this.images.paginator = this.paginator;
    }

    // GET images
    getImages() {
        /*this.service.getImages()
            .subscribe(
                res => this.images = res,
                error => this.errorMessage = error,
        )*/
    }


    //dataSource = new MatTableDataSource(this.images);

    // ADD image
    createForm() {
        this.imageForm = this.form.group({
            heading: ['', Validators.required ],
            description: ['', Validators.required ],
            urlImage: ['', Validators ]
        });
    }

    onSelectedFile(event){
        this.imageFile = <File>event.target.files[0];
    }
/*
    addImage(heading, description, imageName, uploadImage) {
        uploadImage = new FormData();
        uploadImage.append('galleryImage', this.imageFile, this.imageFile.name);
        imageName = this.imageFile.name;
        this.service.addImage(heading, description, imageName, uploadImage);

        this.service.getImages()
            .subscribe(images => this.images = images)
    }
    */

    addImage(heading, description, imageName, img) {
        img = new FormData();
        img.append('galleryImage', this.imageFile, this.imageFile.name);
        imageName = this.imageFile.name;
        this.service.addImage(heading, description, imageName, img)
            .subscribe(
                image => {this.images.push(image);
                    this.service.getImages()
                        .subscribe(images => this.images = images)},
                error => this.errorMessage = error
            );
    }

    // DELETE image
    /*
    delImage(id:any) {
        this.service.delImage(id)
            .subscribe(
                res => console.log(res),
                error => this.errorMessage = error,
            )
    }
    */
    /*
    delImage(id:any) {
        const images = this.images;
        this.service.delImage(id)
            .subscribe(
                data => {
                    if(data.n===1) {
                        for(let i = 0; i < images.length; i++) {
                            if(images[i]._id === id) {
                                images.splice(i,1)
                            }
                        }
                    }
                }
            )
    }*/
    delImage(id:any) {
        this.service.delImage(id)
            .subscribe(
                res => {console.log(res);
                    this.service.getImages()
                        .subscribe(images => this.images = images)},
                error => this.errorMessage = error,
            )
    }

}