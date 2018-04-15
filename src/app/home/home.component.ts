import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    heading = 'Виртуальный Музей';
    subheading = 'Учреждения образования средней школы №2 г. Бобруйска';

    lastData = [];

    constructor(/*private _data: DataService*/) {
        //console.log(this.lastData);
    }

    ngOnInit() {
        //this.lastData = [this._data.getData()];
    }

}
