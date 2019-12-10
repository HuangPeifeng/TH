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
  list = [
    { url: 'factory1.jpg' },
    { url: 'factory2.jpg' },
    { url: 'factory3.jpg' },
    { url: 'factory4.jpg' },
    { url: 'factory5.jpg' },
    { url: 'factory6.jpg' },
    { url: 'factory7.jpg' },
    { url: 'factory8.jpg' },
    { url: 'factory9.jpg' },
    { url: 'factory10.jpg' },
    { url: 'factory11.jpg' },
    { url: 'factory12.jpg' },
    { url: 'factory13.jpg' },
    { url: 'factory14.jpg' }
  ];
  selectedIndex = 0;
  selected = null;

  isPopupOpen = false;

  constructor() { }

  ngOnInit() {
  }

  openPopup(item) {
    this.isPopupOpen = true;
    this.selected = item;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.selected = null;
  }

}
