package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeLoanService {

  @Autowired
  private PersonalInfoRepository personalInfoRepository;

  @Autowired
  private EmploymentInfoRepository employmentInfoRepository;

  @Autowired
  private FinancialInfoRepository financialInfoRepository;

  @Autowired
  private HomeLoanInfoRepository homeLoanInfoRepository;

  @Autowired
  private HomeLoanDataRepository homeLoanDataRepository;

  @Autowired
  private CoApplicantRepository coApplicantRepository;

  @Autowired
  private PropertyLocationRepository propertyLocationRepository;

  @Autowired
  private AddressRepository addressRepository;

  public String add(HomeLoanData homeLoanData) {
    coApplicantRepository.insert(homeLoanData.getHomeLoanInfo().getCoApplicant());
    propertyLocationRepository.insert(homeLoanData.getHomeLoanInfo().getPropertyLocation());
    addressRepository.insert(homeLoanData.getPersonalInfo().getAddress());
    personalInfoRepository.insert(homeLoanData.getPersonalInfo());
    employmentInfoRepository.insert(homeLoanData.getEmploymentInfo());
    financialInfoRepository.insert(homeLoanData.getFinancialInfo());
    homeLoanInfoRepository.insert(homeLoanData.getHomeLoanInfo());

    homeLoanData.setEmail(homeLoanData.getPersonalInfo().getEmail());
    homeLoanDataRepository.insert(homeLoanData);

    return "Done";
  }

  public List<HomeLoanData> getData(String email) {
    List<HomeLoanData> homeLoanDataList = homeLoanDataRepository.findAllByEmail(email);
    System.out.println(homeLoanDataList.size());
    for(HomeLoanData homeLoanData: homeLoanDataList) {
      homeLoanData.setPersonalInfo(personalInfoRepository.findPersonalInfoById(homeLoanData.getPersonalInfo().getId()).getFirst());
      homeLoanData.setEmploymentInfo(employmentInfoRepository.findEmploymentInfoById(homeLoanData.getEmploymentInfo().getId()).getFirst());
      homeLoanData.setFinancialInfo(financialInfoRepository.findFinancialInfoById(homeLoanData.getFinancialInfo().getId()).getFirst());
      homeLoanData.setHomeLoanInfo(homeLoanInfoRepository.findHomeLoanInfoById(homeLoanData.getHomeLoanInfo().getId()).getFirst());
      homeLoanData.getPersonalInfo().setAddress(addressRepository.findAddressById(personalInfoRepository.findPersonalInfoById(homeLoanData.getPersonalInfo().getId()).getFirst().getAddress().getId()).getFirst());
      homeLoanData.getHomeLoanInfo().setCoApplicant(coApplicantRepository.findCoApplicantById(homeLoanInfoRepository.findHomeLoanInfoById(homeLoanData.getHomeLoanInfo().getId()).getFirst().getCoApplicant().getId()).getFirst());
      homeLoanData.getHomeLoanInfo().setPropertyLocation(propertyLocationRepository.findPropertyLocationById(homeLoanInfoRepository.findHomeLoanInfoById(homeLoanData.getHomeLoanInfo().getId()).getFirst().getPropertyLocation().getId()).getFirst());
    }
    return homeLoanDataList;
  }

}
