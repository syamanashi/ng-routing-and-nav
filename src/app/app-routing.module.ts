import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })], // { enableTracing: true } for debugging purposes only.
  exports: [RouterModule]
})
export class AppRoutingModule { }
