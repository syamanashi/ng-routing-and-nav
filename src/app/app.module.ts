import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // For diagnostic troubleshooting only.

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './modules/heroes/heroes.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CrisisCenterModule } from './modules/crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { AuthService } from './auth.service';
import { LoginModule } from './modules/login/login.module';
import { DialogService } from './dialog.service';

/** AppRoutingModule must remain the last import, after all feature modules, so that its wild card routes will be handled last. */
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
    LoginModule,
    AppRoutingModule,
  ],
  providers: [AuthService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Diagnostic only: inspect router configuration
  constructor(private router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
