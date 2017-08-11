import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  /**
   * The ActivatedRouteSnapshot contains the future route that will be activated and the RouterStateSnapshot contains the future RouterState of the application, should you pass through the guard check.
   * If the user is not logged in, you store the attempted URL the user came from using the RouterStateSnapshot.url and tell the router to navigate to a login page—a page you haven't created yet. This secondary navigation automatically cancels the current navigation; checkLogin() returns false just to be clear about that.
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Store the URL that the user came from.
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    // Return true if already logged in.
    if (this.authService.isLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting.
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras.
    this.router.navigate(['/login']);
    return false;
  }
}
