package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Rest API controller
@CrossOrigin(origins = "*")
public class PersonalLoanController {
  @Autowired
  private PersonalLoanService personalLoanService;

  @RequestMapping("/personalloan")
  @ResponseBody
  public HttpStatus createCustomer(@RequestBody PersonalLoanData personalLoanData) throws Exception {
    String insertStatus = personalLoanService.add(personalLoanData);
    System.out.println(insertStatus);
    return HttpStatus.OK;
  }

  @GetMapping("/appliedpersonalloans/{email}")
  public ResponseEntity<List<PersonalLoanData>> getHomeLoans(@PathVariable String email) throws Exception {
    System.out.println("Email is : " + email);
    List<PersonalLoanData> personalLoanDataList = personalLoanService.getData(email);
    if(null != personalLoanDataList && !personalLoanDataList.isEmpty()) return new ResponseEntity<List<PersonalLoanData>>(personalLoanDataList, HttpStatus.OK);
    throw new Exception();
  }
}
