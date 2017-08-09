import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisesListComponent } from './crises-list/crises-list.component';

const routes: Routes = [
  { path: 'crisis-center', component: CrisesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
