import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  menu = [
    { name: '硬質ABS長方形箱' },
    { name: '硬質帆布長方形箱' },
    { name: '硬質ABS造型箱' },
    { name: '硬質帆布造型箱' }
  ];
  list = [
    { url: 'case1.jpg' },
    { url: 'case2.jpg' },
    { url: 'case3.jpg' },
    { url: 'case4.jpg' },
    { url: 'case5.jpg' },
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
