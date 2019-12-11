import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() isPhone;
  @Input() showMenu;
  @Output() closeMenu = new EventEmitter();

  menuList = [
    { name: '首頁', url: '/home' },
    { name: '關於我們', url: '/about' },
    { name: 'Saxophone', url: '/saxophones' },
    { name: '箱子', url: '/cases' },
    { name: '工廠及組裝零配件', url: '/accessories' },
    { name: 'Toois', url: '/toois' },
    // { name: 'LOR', url: '/lor' },
    { name: '聯絡我們', url: '/contact' },
    // { name: '最新消息', url: '/news' }
  ];

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeMenu.emit();
  }

}
