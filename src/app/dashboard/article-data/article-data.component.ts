import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../shared/services/article.service";
import { FormGroup,  FormBuilder,  Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Article } from "./article";

@Component({
  selector: 'app-article-data',
  templateUrl: './article-data.component.html',
  styleUrls: ['./article-data.component.scss']
})
export class ArticleDataComponent implements OnInit {

    articleTitle = 'Добавить статью';

    private errorMessage: string;
    articles: Article[];
    article: Article;
    articleForm: FormGroup;
    editorContent: string;
    imageFile: File = null;
    imageDef: string ='../../assets/img/noimage.png';

    constructor(private service: ArticleService, private form: FormBuilder, private toastr: ToastrService) {
        this.createForm();
    }

    ngOnInit() {
        // GET article
        this.service.getArticles()
            .subscribe(
                articles => this.articles = articles,
                error => this.errorMessage = error
            );
    }

    // Form validation
    createForm() {
        this.articleForm = this.form.group({
            heading: ['', Validators.required ],
            description: [''],
            shortDescription: ['', Validators.required ],
            urlImage: [''],
        });
    }

    // GET uploaded file info
    onSelectedFile(event) {
        if (<File>event.target.files[0] != null) {
            this.imageFile = <File>event.target.files[0];
        } else {
            this.imageFile = null;
        }

        // Image preview
        const reader = new FileReader();
        reader.onload = (event:any) => {
            this.imageDef = event.target.result
        };
        reader.readAsDataURL(this.imageFile)
    }

    // ADD article
    addArticle(heading, description, shortDescription, imageName, img) {
        img = new FormData();
        if (this.imageFile !== null) {
            img.append('articleImage', this.imageFile, this.imageFile.name);
            imageName = this.imageFile.name;
            this.service.addArticle(heading, description, shortDescription, imageName, img)
                .subscribe(
                    article => {
                        this.articles.push(article);
                        this.toastr.success('Статья добавлена');
                        this.articleForm.reset();
                        this.service.getArticles()
                            .subscribe(articles => this.articles = articles);
                    },
                    error => this.errorMessage = error
                );
        } else {
            this.service.addArticle(heading, description, shortDescription, imageName, img)
                .subscribe(
                    article => {
                        this.articles.push(article);
                        this.toastr.success('Статья добавлена');
                        this.articleForm.reset();
                        this.service.getArticles()
                            .subscribe(articles => this.articles = articles);
                    },
                    error => this.errorMessage = error
                );
        }
    }

    // DELETE article
    delArticle(id:any) {
        this.service.delArticle(id)
            .subscribe(
                res => {
                    this.toastr.error('Статья удалена');
                    this.service.getArticles()
                        .subscribe(article => this.articles = article)
                },
                error => this.errorMessage = error,
            )
    }

}
