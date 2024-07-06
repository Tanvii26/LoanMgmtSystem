package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Rest API controller
@CrossOrigin(origins = "*")
public class SignInController {

    @Autowired
    private CustomerDataService customerDataService;

    @RequestMapping("/verify")
    @ResponseBody
    public HttpStatus createCustomer(@RequestBody CustomerData customerData) throws Exception {
        String insertStatus = customerDataService.check(customerData);
        if(insertStatus == null) throw new Exception();
        return HttpStatus.OK;
    }

  @GetMapping("/getusername/{email}")
  public ResponseEntity<CustomerData> getHomeLoans(@PathVariable String email) throws Exception {
    System.out.println("Email is : " + email);
    CustomerData customerData = customerDataService.getUserName(email);
    if(null != customerData) return new ResponseEntity<CustomerData>(customerData, HttpStatus.OK);
    throw new Exception();
  }

}
