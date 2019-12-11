import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooisComponent } from './toois.component';


const routes: Routes = [
  { path: '', component: TooisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TooisRoutingModule { }
