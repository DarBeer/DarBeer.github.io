import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../shared/services/article.service";
import { FormGroup,  FormBuilder,  Validators } from "@angular/forms";
import { Article } from "./article";

@Component({
  selector: 'app-article-data',
  templateUrl: './article-data.component.html',
  styleUrls: ['./article-data.component.scss']
})
export class ArticleDataComponent implements OnInit {

    private errorMessage: string;
    articles: Article[];
    article: Article;
    articleForm: FormGroup;
    imageFile: File = null;

    constructor(private service: ArticleService, private form: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        // GET article
        this.service.getArticles()
            .subscribe(
                articles => this.articles = articles,
                error => this.errorMessage = error
            )
    }

    // Form validation
    createForm() {
        this.articleForm = this.form.group({
            heading: ['', Validators.required ],
            description: ['', Validators.required ],
            urlImage: [''],
            textAll: ['', Validators.required ],
        });
    }

    // GET uploaded file info
    onSelectedFile(event){
        this.imageFile = <File>event.target.files[0];
    }

    // ADD article
    addArticle(heading, description, imageName, textAll, img) {
        img = new FormData();
        img.append('articleImage', this.imageFile, this.imageFile.name);
        imageName = this.imageFile.name;
        this.service.addArticle(heading, description, imageName, textAll, img)
            .subscribe(
                image => {this.articles.push(this.article);
                    this.service.getArticles()
                        .subscribe(articles => this.articles = articles)},
                error => this.errorMessage = error
            );
    }

    // DELETE article
    delArticle(id:any) {
        this.service.delArticle(id)
            .subscribe(
                res => {console.log(res);
                    this.service.getArticles()
                        .subscribe(articles => this.articles = articles)},
                error => this.errorMessage = error,
            )
    }

}
