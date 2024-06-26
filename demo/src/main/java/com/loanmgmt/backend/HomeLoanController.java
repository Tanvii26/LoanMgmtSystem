package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/appliedhomeloans/{email}")
    public ResponseEntity<List<HomeLoanData>> getHomeLoans(String email) throws Exception {
      List<HomeLoanData> homeLoanDataList = homeLoanService.getData(email);
      if(null != homeLoanDataList && !homeLoanDataList.isEmpty()) return new ResponseEntity<List<HomeLoanData>>(homeLoanDataList, HttpStatus.OK);
      throw new Exception();
    }

}
