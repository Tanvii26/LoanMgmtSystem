import React, { useState } from 'react';
import './form.css';
import { useLocation } from 'react-router-dom';

function RegistrationForm({ user }) {

  const location = useLocation();
  const email = user;

  const [currentStep, setCurrentStep] = useState(1);

  const [homeLoanData, setHomeLoanData] = useState({
    personalInfo: {
      fullName: '',
      dateOfBirth: '',
      phone: '',
      email: email,
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
    homeLoanInfo: {
      propertyType: '',
      propertyLocation: {
        city: '',
        state: '',
        zip: ''
      },
      propertyValue: '',
      loanAmount: '',
      loanTenure: '',
      interestRateType: '',
      coApplicant: {
        fullName: '',
        relationship: '',
        annualIncome: ''
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
    e.preventDefault();

    console.log(homeLoanData);

    const response = await fetch("/homeloan", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(homeLoanData),
    });

    const response2 = await fetch("/appliedhomeloans/" + email);
    console.log(response2);
    const data = await response2.json();
    console.log(data);
  };

  return (
    <form className='application' onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <div className='first cards'>
          <h3>Personal Information</h3>
          <input className='form-inp' type="text" name="personalInfo.fullName" placeholder="Full Name" onChange={handleChange} required />
          <input className='form-inp' type="date" name="personalInfo.dateOfBirth" placeholder='Date of Birth' onChange={handleChange} required style={{color:'white'}}/>
          <input className='form-inp' type="tel" name="personalInfo.phone" placeholder="Phone Number" onChange={handleChange} required />
          <input className='form-inp' type="text" name="personalInfo.address.city" placeholder="City" onChange={handleChange} required />
          <input className='form-inp' type="text" name="personalInfo.address.state" placeholder="State" onChange={handleChange} required />
          <input className='form-inp' type="text" name="personalInfo.address.zip" placeholder="Zip Code" onChange={handleChange} required />
          <input className='form-inp' type="text" name="personalInfo.idNumber" placeholder="Identification Number" onChange={handleChange} required />
          <button type="button" onClick={() => setCurrentStep(2)}>Next</button>
        </div>
      )}
      {currentStep === 2 && (
        <div className='sec cards'>
          <h3>Employment Information</h3>
          <select className='form-inp' name="employmentInfo.status" onChange={handleChange} required style={{backgroundColor:'transparent', color:'white', border:'none', borderBottom:'2px solid black'}}>
            <option value="">Employment Status</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Retired">Retired</option>
          </select>
          <input className='form-inp' type="text" name="employmentInfo.employer" placeholder="Employer Name" onChange={handleChange} required />
          <input className='form-inp' type="text" name="employmentInfo.jobTitle" placeholder="Job Title" onChange={handleChange} required />
          <input className='form-inp' type="number" name="employmentInfo.annualIncome" placeholder="Annual Income" onChange={handleChange} required />
          <input className='form-inp' type="text" name="employmentInfo.duration" placeholder="Employment Duration" onChange={handleChange} required />
          <button type="button" onClick={() => setCurrentStep(3)}>Next</button>
        </div>
      )}
      {currentStep === 3 && (
        <div className='third cards'>
          <h3>Financial Information</h3>
          <input className='form-inp' type="number" name="financialInfo.monthlyIncome" placeholder="Monthly Income" onChange={handleChange} required />
          <input className='form-inp' type="number" name="financialInfo.monthlyExpenses" placeholder="Monthly Expenses" onChange={handleChange} required />
          <input className='form-inp' type="text" name="financialInfo.otherLoans" placeholder="Other Loans" onChange={handleChange} required />
          <button type="button" onClick={() => setCurrentStep(4)}>Next</button>
        </div>
      )}
      {currentStep === 4 && (
        <div className='fourth cards'>
          <h3>Home Loan Specific Form</h3>
          <input className='form-inp' type="text" name="homeLoanInfo.propertyType" placeholder="Property Type" onChange={handleChange} required />
          <input className='form-inp' type="text" name="homeLoanInfo.propertyLocation.city" placeholder="Property City" onChange={handleChange} required />
          <input className='form-inp' type="text" name="homeLoanInfo.propertyLocation.state" placeholder="Property State" onChange={handleChange} required />
          <input className='form-inp' type="text" name="homeLoanInfo.propertyLocation.zip" placeholder="Property Zip Code" onChange={handleChange} required />
          <input className='form-inp' type="number" name="homeLoanInfo.propertyValue" placeholder="Property Value" onChange={handleChange} required />
          <input className='form-inp' type="number" name="homeLoanInfo.loanAmount" placeholder="Loan Amount Requested" onChange={handleChange} required />
          <input className='form-inp' type="number" name="homeLoanInfo.loanTenure" placeholder="Loan Tenure (in years)" onChange={handleChange} required />
          <select className='form-inp' name="homeLoanInfo.interestRateType" onChange={handleChange} required style={{backgroundColor:'transparent', color:'white', border:'none', borderBottom:'2px solid black'}}>
            <option value="">Interest Rate Type</option>
            <option value="Fixed">Fixed</option>
            <option value="Variable">Variable</option>
          </select>
          <button type="button" onClick={() => setCurrentStep(5)}>Next</button>
        </div>
      )}
      {currentStep === 5 && (
        <div className='fifth cards'>
          <h4>Co-Applicant Details</h4>
          <input className='form-inp' type="text" name="homeLoanInfo.coApplicant.fullName" placeholder="Full Name" onChange={handleChange} required />
          <input className='form-inp' type="text" name="homeLoanInfo.coApplicant.relationship" placeholder="Relationship" onChange={handleChange} required />
          <input className='form-inp' type="number" name="homeLoanInfo.coApplicant.annualIncome" placeholder="Annual Income" onChange={handleChange} required />
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
}

export default RegistrationForm;
