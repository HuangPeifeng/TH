import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
    { name: '工廠及組裝零配件', url: '/accessories' },
    { name: 'Saxophone', url: '/saxophones' },
    { name: '箱子', url: '/cases' },
    { name: 'Toois', url: '/toois' },
    // { name: 'LOR', url: '/lor' },
    { name: '聯絡我們', url: '/contact' },
    // { name: '最新消息', url: '/news' }
  ];

  nowPath;
  lang;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.nowPath = e.url;
      }
    });
    if (sessionStorage.getItem('lang')) {
      this.lang = sessionStorage.getItem('lang');
    } else {
      this.lang = 'zh-tw';
    }
  }

  changeTranslate(lang) {
    this.lang = lang;
    this.translate.use(lang);
    sessionStorage.setItem('lang', lang);
  }

  goLink(url) {
    this.router
      .navigate([url])
      .then(() => {
        this.close();
      });
  }

  close() {
    this.closeMenu.emit();
  }

}
