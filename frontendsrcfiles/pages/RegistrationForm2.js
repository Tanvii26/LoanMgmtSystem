import React, { useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

function RegistrationForm2() {

  const location = useLocation();
  
  const [email, setEmail] = useState(location.state.email);

  const [homeLoanData, setHomeLoanData] = useState({
    personalInfo: {
      fullName: '',
      dateOfBirth: '',
      phone: '',
      email : email,
      address: {
        city: '',
        state: '',
        zip: ''
      },
      idNumber: ''
    },
    employmentInfo: {
      status: '',
      employer: '',
      jobTitle: '',
      annualIncome: '',
      duration: ''
    },
    financialInfo: {
      monthlyIncome: '',
      monthlyExpenses: '',
      otherLoans: ''
    },
    personalLoanInfo: {
        loanPurpose: '',
        loanDetails: {
            loanAmount: '',
            loanTenure: '',
            preferredEMI: ''
        }
      }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');

    setHomeLoanData(prevState => {
      let nestedState = { ...prevState };
      let current = nestedState;

      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          current[key] = value;
        } else {
          current = current[key];
        }
      });

      return nestedState;
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault()

    console.log(homeLoanData);

    const response = await fetch("/personalloan", {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(homeLoanData),
        
      });

      // Responses for dashboard
      const response2= await fetch("/appliedpersonalloans/"+email);
       console.log(response2);
       const data= await response2.json();
       console.log(data);

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>General Registration Form</h2>
      <h3>Personal Information</h3>
      <input type="text" name="personalInfo.fullName" placeholder="Full Name" onChange={handleChange} required />
      <input type="date" name="personalInfo.dateOfBirth" onChange={handleChange} required />
      <input type="tel" name="personalInfo.phone" placeholder="Phone Number" onChange={handleChange} required />
      <input type="text" name="personalInfo.address.city" placeholder="City" onChange={handleChange} required />
      <input type="text" name="personalInfo.address.state" placeholder="State" onChange={handleChange} required />
      <input type="text" name="personalInfo.address.zip" placeholder="Zip Code" onChange={handleChange} required />
      <input type="text" name="personalInfo.idNumber" placeholder="Identification Number" onChange={handleChange} required />
      
      <h3>Employment Information</h3>
      <select name="employmentInfo.status" onChange={handleChange} required>
        <option value="">Employment Status</option>
        <option value="Employed">Employed</option>
        <option value="Self-Employed">Self-Employed</option>
        <option value="Unemployed">Unemployed</option>
        <option value="Retired">Retired</option>
      </select>
      <input type="text" name="employmentInfo.employer" placeholder="Employer Name" onChange={handleChange} required />
      <input type="text" name="employmentInfo.jobTitle" placeholder="Job Title" onChange={handleChange} required />
      <input type="number" name="employmentInfo.annualIncome" placeholder="Annual Income" onChange={handleChange} required />
      <input type="text" name="employmentInfo.duration" placeholder="Employment Duration" onChange={handleChange} required />
      
      <h3>Financial Information</h3>
      <input type="number" name="financialInfo.monthlyIncome" placeholder="Monthly Income" onChange={handleChange} required />
      <input type="number" name="financialInfo.monthlyExpenses" placeholder="Monthly Expenses" onChange={handleChange} required />
      <input type="text" name="financialInfo.otherLoans" placeholder="Other Loans" onChange={handleChange} required />
      
      <h3>Personal Loan Specific Form</h3>
      <input type="text" name="personalLoanInfo.loanPurpose" placeholder="Purpose of Loan" onChange={handleChange} required />
      <input type="number" name="personalLoanInfo.loanDetails.loanAmount" placeholder="Loan Amount Requested" onChange={handleChange} required />
      <input type="text" name="personalLoanInfo.loanDetails.loanTenure" placeholder="Loan Tenure (in months/years)" onChange={handleChange} required />
      <input type="number" name="personalLoanInfo.loanDetails.preferredEMI" placeholder="Preferred EMI Amount" onChange={handleChange} required />
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm2;
