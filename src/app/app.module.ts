import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router'; // For diagnostic troubleshooting only.

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';


import { AuthService } from './auth.service';
import { LoginModule } from './login/login.module';
import { DialogService } from './dialog.service';
import { SharedModule } from './shared/shared.module';

/** AppRoutingModule must remain the last import, after all feature modules, so that its wild card routes will be handled last. */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    LoginModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [AuthService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Diagnostic only: inspect router configuration
  constructor(private router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
