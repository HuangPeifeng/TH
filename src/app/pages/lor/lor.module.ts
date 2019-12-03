import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LorRoutingModule } from './lor-routing.module';
import { LorComponent } from './lor.component';


@NgModule({
  declarations: [LorComponent],
  imports: [
    CommonModule,
    LorRoutingModule
  ]
})
export class LorModule { }
