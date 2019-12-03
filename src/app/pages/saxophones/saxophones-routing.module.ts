import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaxophonesComponent } from './saxophones.component';


const routes: Routes = [
  { path: '', component: SaxophonesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaxophonesRoutingModule { }
