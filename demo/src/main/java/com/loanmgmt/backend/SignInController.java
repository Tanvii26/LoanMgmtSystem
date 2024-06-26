package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

}
