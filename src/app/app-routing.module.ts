import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './authentication/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './authentication/pages/registration-page/registration-page.component';

const routes: Routes = [
  {
    path:"",
    component: LoginPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "register",
    component: RegistrationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
