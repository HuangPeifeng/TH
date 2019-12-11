import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooisRoutingModule } from './toois-routing.module';
import { TooisComponent } from '../toois/toois.component';


@NgModule({
  declarations: [TooisComponent],
  imports: [
    CommonModule,
    TooisRoutingModule
  ]
})
export class TooisModule { }
