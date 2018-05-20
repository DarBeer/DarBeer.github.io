import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    heading = 'История Школы';
    subheading = 'Спать нельзя, читать можно';

    sub_planning = '0';
    subdimension = [{'name': 'oneabc','value': 1 },
        {'name': 'twoabc','value': 2}];

    constructor() { }

    ngOnInit() {
    }

}
