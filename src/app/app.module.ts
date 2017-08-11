import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './modules/heroes/heroes.module';
import { AdminModule } from './modules/admin/admin.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CrisisCenterModule } from './modules/crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AppRoutingModule, // must remain after all feature modules.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
