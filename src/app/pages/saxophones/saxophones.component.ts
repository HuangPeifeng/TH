import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saxophones',
  templateUrl: './saxophones.component.html',
  styleUrls: ['./saxophones.component.scss']
})
export class SaxophonesComponent implements OnInit {
  menu = [
    { name: '全部' },
    { name: '超高音' },
    { name: '高音' },
    { name: '中音' },
    { name: '次中音' },
    { name: '上低音' }
  ];
  selectedIndex = 0;

  isPopupOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
