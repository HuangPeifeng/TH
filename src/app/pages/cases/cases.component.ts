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
  selectedIndex = 0;

  constructor() { }

  ngOnInit() {
  }

}
