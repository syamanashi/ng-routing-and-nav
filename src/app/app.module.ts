import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './modules/heroes/heroes.module';

import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    AppRoutingModule, // must remain after all feature modules.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
