import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

    title = 'Дипломный Проект';
    home = 'Главная';
    copyright = 'Copyright © Diploma Project 2018';

    linkList  = [
        { name: 'История', link: '/history'},
        { name: 'Статьи', link: '/articles'},
        { name: 'Галерея', link: '/image-gallery'}
        // , { name: 'Видео', link: '/video-gallery'}
    ];

    constructor() { }

    ngOnInit() {
    }

}
