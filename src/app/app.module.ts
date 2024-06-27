// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './MyComponent/home/home.component';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// @NgModule({
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     AppComponent
//   ],
//   declarations: [
//     AppComponent,
//   ],
//     providers: [],
//     bootstrap: [AppComponent]
//   })
//   export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { HomeLoanFormComponent } from './MyComponent/home-loan-form/home-loan-form.component';
import { PersonalLoanFormComponent } from './MyComponent/personal-loan-form/personal-loan-form.component';
import { LoginSignupComponent } from './MyComponent/login-signup/login-signup.component';
import { LandingPageComponent } from './MyComponent/landing-page/landing-page.component';

@NgModule({
  declarations: [
    // AppComponent,
    HomeComponent,
    HomeLoanFormComponent,
    PersonalLoanFormComponent,
    LoginSignupComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }