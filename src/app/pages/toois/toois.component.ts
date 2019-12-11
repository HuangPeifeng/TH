import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toois',
  templateUrl: './toois.component.html',
  styleUrls: ['./toois.component.scss']
})
export class TooisComponent implements OnInit {
  menu = [
    { name: '全部' },
    { name: '高音' },
    { name: '中音' },
    { name: '次中音' }
  ];
  list = [
    { url: 'toois1.jpg' },
    { url: 'toois2.jpg' },
    { url: 'toois3.jpg' },
    { url: 'toois4.jpg' },
    { url: 'toois5.jpg' },
    { url: 'toois6.jpg' }
  ];

  isPopupOpen = false;
  selected = null;

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
