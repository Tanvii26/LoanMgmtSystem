import { Component } from '@angular/core';
// import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-loan-form',
  templateUrl: './home-loan-form.component.html',
  styleUrls: ['./home-loan-form.component.css']
})
export class HomeLoanFormComponent {
  homeLoan = {
    propertyType: '',
    propertyLocation: '',
    propertyValue: 0,
    loanAmountRequested: 0,
    loanTenure: 0,
    interestRateType: '',
    coApplicantDetails: ''
  };

  // constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    // this.apiService.applyHomeLoan(this.homeLoan).subscribe(response => {
      console.log("Home-Loan Application Successful");
      // this.router.navigate(['/welcome']);
    };
  }