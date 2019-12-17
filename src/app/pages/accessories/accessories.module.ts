import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import { AccessoriesComponent } from './accessories.component';
import { ThemeModule } from 'src/app/theme/theme.module';


@NgModule({
  declarations: [AccessoriesComponent],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    ThemeModule
  ]
})
export class AccessoriesModule { }
