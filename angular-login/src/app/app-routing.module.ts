import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SucefullComponent } from './sucefull/sucefull.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create', component: CreateAccountComponent },
  { path: 'forgot', component:  ForgotPasswordComponent},
  { path: 'successful', component:  SucefullComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
