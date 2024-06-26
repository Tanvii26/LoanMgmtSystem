package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeLoanService {

    @Autowired
    private HomeLoanDataRepository homeLoanDataRepository;

    public String add(HomeLoanData homeLoanData) {
        homeLoanDataRepository.insert(homeLoanData);
        return "Done";
    }

}
