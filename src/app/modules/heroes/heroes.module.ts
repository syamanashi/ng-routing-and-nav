import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  declarations: [HeroListComponent, HeroDetailComponent],
  providers: [HeroService]
})
export class HeroesModule { }
