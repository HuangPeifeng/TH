import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList = [
    { name: '首頁', url: '/home' },
    { name: '關於我們', url: '/about' },
    { name: '薩克斯風', url: '/saxophones' },
    { name: '箱子', url: '/cases' },
    { name: '配件', url: '/accessories' },
    { name: 'LOR', url: '/lor' },
    { name: '聯絡我們', url: '/contact' },
    { name: '最新消息', url: '/news' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
