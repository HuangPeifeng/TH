import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'saxophones', loadChildren: () => import('./pages/saxophones/saxophones.module').then(m => m.SaxophonesModule) },
  { path: 'cases', loadChildren: () => import('./pages/cases/cases.module').then(m => m.CasesModule) },
  { path: 'accessories', loadChildren: () => import('./pages/accessories/accessories.module').then(m => m.AccessoriesModule) },
  { path: 'lor', loadChildren: () => import('./pages/lor/lor.module').then(m => m.LorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
