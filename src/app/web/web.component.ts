import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

    title = 'Дипломный Проект';
    home = 'Главная';
    history = 'История';
    articles = 'Статьи';
    image_gallery = 'Галерея';
    video_gallery = 'Видео';

    constructor() { }

    ngOnInit() {
    }

}
