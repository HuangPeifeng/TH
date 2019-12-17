import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesComponent } from './cases.component';
import { ThemeModule } from 'src/app/theme/theme.module';


@NgModule({
  declarations: [CasesComponent],
  imports: [
    CommonModule,
    CasesRoutingModule,
    ThemeModule
  ]
})
export class CasesModule { }
