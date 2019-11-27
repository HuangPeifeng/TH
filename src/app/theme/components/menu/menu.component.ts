import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList = [
    { name: 'Home', url: '/home' },
    { name: 'About', url: '/about' },
    { name: 'Saxophones', url: '/saxophones' },
    { name: 'Cases', url: '/cases' },
    { name: 'Accessories', url: '/accessories' },
    { name: 'LOR', url: '/lor' },
    { name: 'Contact', url: '/contact' },
    { name: 'News', url: '/news' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
