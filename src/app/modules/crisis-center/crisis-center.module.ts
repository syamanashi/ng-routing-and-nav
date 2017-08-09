import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisComponent } from './crisis/crisis.component';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

import { CrisisService } from './crisis.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule,
  ],
  declarations: [CrisisComponent, CrisesListComponent, CrisisCenterComponent, CrisisCenterHomeComponent],
  providers: [CrisisService],
})
export class CrisisCenterModule { }
