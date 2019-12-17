import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaxophonesRoutingModule } from './saxophones-routing.module';
import { SaxophonesComponent } from './saxophones.component';
import { ThemeModule } from 'src/app/theme/theme.module';


@NgModule({
  declarations: [SaxophonesComponent],
  imports: [
    CommonModule,
    SaxophonesRoutingModule,
    ThemeModule
  ]
})
export class SaxophonesModule { }
