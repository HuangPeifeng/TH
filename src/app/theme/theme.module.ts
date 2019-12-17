import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [MenuComponent, SafePipe],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    MenuComponent,
    TranslateModule,
    SafePipe
  ]
})
export class ThemeModule { }
