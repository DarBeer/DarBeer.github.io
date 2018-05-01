import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from "../../shared/services/data.service";
import { FormGroup,  FormBuilder,  Validators } from "@angular/forms";
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Image } from './image'

@Component({
    selector: 'app-image-data',
    templateUrl: './image-data.component.html',
    styleUrls: ['./image-data.component.scss']
})
export class ImageDataComponent implements OnInit, AfterViewInit {

    imageTitle = 'Добавить Фотографию';

    private errorMessage: string;
    images: Image[];
    image: Image;
    imageForm: FormGroup;
    imageFile: File = null;
    imageDef: string ='../../assets/img/noimage.png';
    //displayedColumns = ['heading','description','image','date'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private service: DataService, private form: FormBuilder, private toastr: ToastrService) {
        this.createForm();
    }

    ngOnInit() {
        // GET images
        this.service.getImages()
            .subscribe(
                images => this.images = images,
                error => this.errorMessage = error
            )
    }

    ngAfterViewInit() {
        //this.images.paginator = this.paginator;
    }

    //dataSource = new MatTableDataSource(this.images);

    // Form validation
    createForm() {
        this.imageForm = this.form.group({
            heading: ['', Validators.required ],
            description: ['', Validators.required ],
            urlImage: ['']
        });
    }

    // GET uploaded file info
    onSelectedFile(event) {
        this.imageFile = <File>event.target.files[0];

        // Image preview
        const reader = new FileReader();
        reader.onload = (event:any) => {
            this.imageDef = event.target.result
        };
        reader.readAsDataURL(this.imageFile)
    }

    // ADD image
    addImage(heading, description, imageName, img) {
        img = new FormData();
        img.append('galleryImage', this.imageFile, this.imageFile.name);
        imageName = this.imageFile.name;
        this.service.addImage(heading, description, imageName, img)
            .subscribe(
                image => {
                    this.images.push(image);
                    this.toastr.success('Фотография добавлена в галерею');
                    this.imageForm.reset();
                    this.service.getImages()
                        .subscribe(images => this.images = images)
                },
                error => this.errorMessage = error
            );
    }

    // DELETE image
    delImage(id:any) {
        this.service.delImage(id)
            .subscribe(
                res => {
                    this.toastr.error('Фотография удалена из галереи');
                    this.service.getImages()
                        .subscribe(images => this.images = images)
                },
                error => this.errorMessage = error,
            )
    }

}