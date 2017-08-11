import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  /**
   * The ActivatedRouteSnapshot contains the future route that will be activated and the RouterStateSnapshot contains the future RouterState of the application, should you pass through the guard check.
   * If the user is not logged in, you store the attempted URL the user came from using the RouterStateSnapshot.url and tell the router to navigate to a login page—a page you haven't created yet. This secondary navigation automatically cancels the current navigation; checkLogin() returns false just to be clear about that.
   * The canActivate() and canActivateChild() methods can return an Observable<boolean> or Promise<boolean> for async checks and a boolean for sync checks
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
  // ): Observable<boolean> | Promise<boolean> | boolean {
    // Store the URL that the user came from.
    const url: string = state.url;
    return this.checkLogin(url);
  }

  /** The CanActivateChild guard is similar to the CanActivate guard. The key difference is that it runs before any child route is activated. */
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(next, state);
  }

  checkLogin(url: string): boolean {
    // Return true if already logged in.
    if (this.authService.isLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting.
    this.authService.redirectUrl = url;

    // Create a dummy session id
    const sessionId = 123456789;

    // Set our navigation extras object that contains our global query params and fragment.
    // You can use these persistent bits of information for things that need to be provided across pages like authentication tokens or session ids.
    const navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor',
    };

    // Navigate to the login page with extras.
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}
