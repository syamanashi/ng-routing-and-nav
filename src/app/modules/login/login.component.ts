import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  defaultRedirectUrl = '/crisis-center/admin';

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service.
        // If no redirect has been set, use the default.
        const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : this.defaultRedirectUrl;

        // Redirect the user.
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
