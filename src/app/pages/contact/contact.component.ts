import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  address;
  cover = '/TH/assets/images/bg/1.jpg';
  count = 0;
  list = [1, 2, 3, 4, 5, 6];
  opacity = 1;
  $interval = null;

  constructor(
    private translate: TranslateService
  ) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event) {
        this.address = `https://maps.google.com.tw/maps?f=q&hl=${event.lang}&geocode=&q=彰化市孝德街18號1樓&z=16&output=embed&t=`;
      }
    });
  }

  ngOnInit() {
    this.address = `https://maps.google.com.tw/maps?f=q&hl=${this.translate.currentLang}&geocode=&q=彰化市孝德街18號1樓&z=16&output=embed&t=`;
    this.$interval = setInterval(() => {
      this.count++;
      if (this.count > 5) {
        this.count = 0;
      }
      const isOpacity = setInterval(() => {
        this.opacity = this.opacity - 0.1;
        if (this.opacity < 0) {
          this.opacity = 0;
          clearInterval(isOpacity);
          this.cover = `/TH/assets/images/bg/${this.list[this.count]}.jpg`;
          const noOpacity = setInterval(() => {
            this.opacity = this.opacity + 0.1;
            if (this.opacity > 1) {
              this.opacity = 1;
              clearInterval(noOpacity);
            }
          }, 100);
        }
      }, 100);
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.$interval);
  }

}
