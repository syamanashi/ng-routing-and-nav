import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }, // pathMatch options: 'full', 'prefix'
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })], // { enableTracing: true } for debugging purposes only.
  exports: [RouterModule], // By re-exporting the RouterModule here and importing AppRoutingModule in AppModule, the components declared in AppModule will have access to router directives such as RouterLink and RouterOutlet.
})
export class AppRoutingModule { }
