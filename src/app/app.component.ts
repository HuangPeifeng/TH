import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TH';
  isPhone = false;
  showMenu = false;

  @HostListener('window:resize')
  onResize() {
    const clientWidth = document.body.clientWidth;
    if (clientWidth < 991) {
      this.isPhone = true;
      this.showMenu = false;
    } else {
      this.isPhone = false;
    }
  }

  ngOnInit() {
    this.onResize();
  }

  openMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }
}
