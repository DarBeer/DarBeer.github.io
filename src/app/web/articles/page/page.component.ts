import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Image, IMAGES } from '../../../../data/images';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    images: Image[];
    image: Image;

    constructor(private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        //this.route.params.subscribe(params => console.log(params))
        /*
        this.route.params
            .switchMap((params: Params) => this.bookService.getBook(+params['id']))
            .subscribe(book => this.book = book);
            */
        // https://www.concretepage.com/angular-2/angular-2-routing-and-navigation-example#params
    }

    goBack(): void {
        this.location.back();
    }

}
