import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  cover = '/assets/images/1.jpg';
  count = 0;
  list = [1, 2, 3, 4, 5, 6];
  opacity = 1;
  $interval = null;

  constructor() { }

  ngOnInit() {
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
          this.cover = `/assets/images/${this.list[this.count]}.jpg`;
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
