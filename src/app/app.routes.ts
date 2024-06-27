import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';
import { LoginSignupComponent } from './MyComponent/login-signup/login-signup.component';
import { HomeLoanFormComponent } from './MyComponent/home-loan-form/home-loan-form.component';
import { PersonalLoanFormComponent } from './MyComponent/personal-loan-form/personal-loan-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'home-loan', component: HomeLoanFormComponent },
  { path: 'personal-loan', component: PersonalLoanFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }