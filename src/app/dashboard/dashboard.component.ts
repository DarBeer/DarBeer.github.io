import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    title = 'Виртуальный музей';
    dashboard = 'Главная панель';
    pages = 'Страницы';
    articles = 'Статьи';
    image_gallery = 'Галерея';
    // video_gallery = 'Видео';
    logout = 'Выйти';

    constructor() { }

    ngOnInit() {
    }

}
