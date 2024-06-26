package com.loanmgmt.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerDataService {

    @Autowired
    private CustomerDataRepository customerDataRepository;

    public String add(CustomerData customerData) {
        List<CustomerData> customerDataCheck = customerDataRepository.findCustomerDataByEmail(customerData.getEmail());
        if(null == customerDataCheck || customerDataCheck.isEmpty()) {
            customerDataRepository.insert(customerData);
            return "Done";
        }
        return null;
    }

    public String check(CustomerData customerData) {
        List<CustomerData> customerDataCheck = customerDataRepository.findCustomerDataByEmail(customerData.getEmail());
        if(null == customerDataCheck || customerDataCheck.isEmpty()) return null;
        if(!customerData.getPassword().equals(customerDataCheck.getFirst().getPassword())) return null;
        return "Verified";
    }

}
