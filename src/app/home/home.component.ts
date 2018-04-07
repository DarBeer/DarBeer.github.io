import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    heading = 'Виртуальный Музей';
    subheading = 'Учреждения образования средней школы №2 г. Бобруйска';

    constructor() { }

    ngOnInit() {

    }

}
