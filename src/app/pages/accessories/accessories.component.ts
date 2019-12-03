import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
  menu = [
    { name: '吹嘴' },
    { name: '木製配件' },
    { name: '吹嘴東圈' }
  ];
  selectedIndex = 0;

  constructor() { }

  ngOnInit() {
  }

}
