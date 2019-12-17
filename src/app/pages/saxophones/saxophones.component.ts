import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saxophones',
  templateUrl: './saxophones.component.html',
  styleUrls: ['./saxophones.component.scss']
})
export class SaxophonesComponent implements OnInit {
  menu = [
    { name: '全部' },
    { name: '高音' },
    { name: '中音' },
    { name: '次中音' }
  ];
  list = [
    { category: '高音', fileName: 'sax-high1.jpg' },
    { category: '高音', fileName: 'sax-high2.jpg' },
    { category: '高音', fileName: 'sax-high3.jpg' },
    { category: '高音', fileName: 'sax-high4.jpg' },
    { category: '高音', fileName: 'sax-high5.jpg' },
    { category: '中音', fileName: 'sax-mid1.jpg' },
    { category: '中音', fileName: 'sax-mid2.jpg' },
    { category: '中音', fileName: 'sax-mid3.jpg' },
    { category: '中音', fileName: 'sax-mid4.jpg' },
    { category: '中音', fileName: 'sax-mid5.jpg' },
    { category: '中音', fileName: 'sax-mid6.jpg' },
    { category: '中音', fileName: 'sax-mid7.jpg' },
    { category: '中音', fileName: 'sax-mid8.jpg' },
    { category: '中音', fileName: 'sax-mid9.jpg' },
    { category: '中音', fileName: 'sax-mid10.jpg' },
    { category: '中音', fileName: 'sax-mid11.jpg' },
    { category: '中音', fileName: 'sax-mid12.jpg' },
    { category: '次中音', fileName: 'sax-tenor1.jpg' },
    { category: '次中音', fileName: 'sax-tenor2.jpg' },
    { category: '次中音', fileName: 'sax-tenor3.jpg' },
    { category: '次中音', fileName: 'sax-tenor4.jpg' },
    { category: '次中音', fileName: 'sax-tenor5.jpg' },
    { category: '次中音', fileName: 'sax-tenor6.jpg' },
    { category: '次中音', fileName: 'sax-tenor7.jpg' },
    { category: '次中音', fileName: 'sax-tenor8.jpg' }
  ];
  subList = this.list;

  selectedName = '全部';

  isPopupOpen = false;
  selected = null;

  constructor() { }

  ngOnInit() {
  }

  changeCategory(name) {
    this.selectedName = name;
    switch (name) {
      case '高音':
        this.subList = this.list.filter(res => res.category === '高音');
        break;
      case '中音':
        this.subList = this.list.filter(res => res.category === '中音');
        break;
      case '次中音':
        this.subList = this.list.filter(res => res.category === '次中音');
        break;
      default:
        this.subList = this.list;
        break;
    }
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
