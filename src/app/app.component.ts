import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Дипломный Проект';
    home = 'Главная';
    history = 'История';
    articles = 'Статьи';
    image_gallery = 'Галерея';
    video_gallery = 'Видео'
}