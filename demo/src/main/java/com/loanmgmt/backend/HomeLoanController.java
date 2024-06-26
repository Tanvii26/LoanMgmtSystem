package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController // Rest API controller
@CrossOrigin(origins = "*")
public class HomeLoanController {

    @Autowired
    private HomeLoanService homeLoanService;

    @RequestMapping("/homeloan")
    @ResponseBody
    public HttpStatus createCustomer(@RequestBody HomeLoanData homeLoanData) throws Exception {
        String insertStatus = homeLoanService.add(homeLoanData);
        System.out.println(insertStatus);
        return HttpStatus.OK;
    }

}
