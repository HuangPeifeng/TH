import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from '../about/about.component';
import { ThemeModule } from 'src/app/theme/theme.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ThemeModule
  ]
})
export class AboutModule { }
