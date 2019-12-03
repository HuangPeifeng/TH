import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LorComponent } from './lor.component';


const routes: Routes = [
  { path: '', component: LorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LorRoutingModule { }
