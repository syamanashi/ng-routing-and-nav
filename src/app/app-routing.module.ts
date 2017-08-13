import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { AuthGuard } from './auth.guard';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' }, // This 'compose' route targets the popup outlet and the ComposeMessageComponent will display there.
  { path: 'admin', loadChildren: 'app/modules/admin/admin.module#AdminModule', canLoad: [AuthGuard] },
  { path: 'crisis-center', loadChildren: 'app/modules/crisis-center/crisis-center.module#CrisisCenterModule', data: { preload: true } },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }, // pathMatch options: 'full', 'prefix'
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStrategy })], // , { enableTracing: true } for debugging purposes only. To preload all: { preloadingStrategy: PreloadAllModules }
  exports: [RouterModule], // By re-exporting the RouterModule here and importing AppRoutingModule in AppModule, the components declared in AppModule will have access to router directives such as RouterLink and RouterOutlet.
  providers: [CanDeactivateGuard, AuthGuard, SelectivePreloadingStrategy],
})
export class AppRoutingModule { }
