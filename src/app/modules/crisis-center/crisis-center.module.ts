import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisComponent } from './crisis/crisis.component';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';

@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ],
  declarations: [CrisisComponent, CrisesListComponent, CrisisCenterComponent]
})
export class CrisisCenterModule { }
