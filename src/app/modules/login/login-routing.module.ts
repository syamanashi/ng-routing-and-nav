import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from '../../auth.guard';
import { AuthService } from '../../auth.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class LoginRoutingModule { }
