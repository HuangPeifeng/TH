import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaxophonesRoutingModule } from './saxophones-routing.module';
import { SaxophonesComponent } from './saxophones.component';


@NgModule({
  declarations: [SaxophonesComponent],
  imports: [
    CommonModule,
    SaxophonesRoutingModule
  ]
})
export class SaxophonesModule { }
