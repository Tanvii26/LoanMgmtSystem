import { Component } from '@angular/core';
// import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-loan-form',
  templateUrl: './personal-loan-form.component.html',
  styleUrls: ['./personal-loan-form.component.css']
})
export class PersonalLoanFormComponent {
  personalLoan = {
    purpose: '',
    loanAmountRequested: 0,
    loanTenure: 0,
    preferredEmiAmount: 0
  };

  // constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    // this.apiService.applyPersonalLoan(this.personalLoan).subscribe(response => {
      console.log();
      // this.router.navigate(['/welcome']);
    };
  }