package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController // Rest API controller
@CrossOrigin(origins = "*")
public class SignUpController {

    @Autowired
    private CustomerDataService customerDataService;

    @RequestMapping("/customer")
    @ResponseBody
    public HttpStatus createCustomer(@RequestBody CustomerData customerData) throws Exception {
        String insertStatus = customerDataService.add(customerData);
        System.out.println(insertStatus);
        if(insertStatus == null) throw new Exception();
        return HttpStatus.OK;
    }

}
