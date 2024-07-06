package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalLoanService {
  @Autowired
  private PersonalInfoRepository personalInfoRepository;

  @Autowired
  private EmploymentInfoRepository employmentInfoRepository;

  @Autowired
  private FinancialInfoRepository financialInfoRepository;

  @Autowired
  private AddressRepository addressRepository;

  @Autowired
  private PersonalLoanDataRepository personalLoanDataRepository;

  @Autowired
  private LoanDetailsRepository loanDetailsRepository;

  @Autowired
  private PersonalLoanInfoRepository personalLoanInfoRepository;

  public String add(PersonalLoanData personalLoanData) {
    loanDetailsRepository.insert(personalLoanData.getPersonalLoanInfo().getLoanDetails());
    addressRepository.insert(personalLoanData.getPersonalInfo().getAddress());
    personalInfoRepository.insert(personalLoanData.getPersonalInfo());
    employmentInfoRepository.insert(personalLoanData.getEmploymentInfo());
    financialInfoRepository.insert(personalLoanData.getFinancialInfo());
    personalLoanInfoRepository.insert(personalLoanData.getPersonalLoanInfo());

    personalLoanData.setEmail(personalLoanData.getPersonalInfo().getEmail());
    personalLoanDataRepository.insert(personalLoanData);

    return "Done";
  }

  public List<PersonalLoanData> getData(String email) {
    List<PersonalLoanData> personalLoanDataList = personalLoanDataRepository.findAllByEmail(email);
    System.out.println(personalLoanDataList.size());
    for(PersonalLoanData personalLoanData: personalLoanDataList) {
      personalLoanData.setPersonalInfo(personalInfoRepository.findPersonalInfoById(personalLoanData.getPersonalInfo().getId()).getFirst());
      personalLoanData.setEmploymentInfo(employmentInfoRepository.findEmploymentInfoById(personalLoanData.getEmploymentInfo().getId()).getFirst());
      personalLoanData.setFinancialInfo(financialInfoRepository.findFinancialInfoById(personalLoanData.getFinancialInfo().getId()).getFirst());
      personalLoanData.getPersonalInfo().setAddress(addressRepository.findAddressById(personalInfoRepository.findPersonalInfoById(personalLoanData.getPersonalInfo().getId()).getFirst().getAddress().getId()).getFirst());
      personalLoanData.getPersonalLoanInfo().setLoanDetails(loanDetailsRepository.findLoanDetailsById(personalLoanInfoRepository.findPersonalLoanInfoById(personalLoanData.getPersonalLoanInfo().getId()).getFirst().getLoanDetails().getId()).getFirst());
    }
    return personalLoanDataList;
  }

}
