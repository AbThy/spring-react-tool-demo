package com.dpd.backendtool.service.impl;

import com.dpd.backendtool.dto.CustomerDto;
import com.dpd.backendtool.entity.Customer;
import com.dpd.backendtool.service.CustomerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    /**
     * @{inheritDoc}
     */
    @Override
    public List<Customer> getCustomers() {
        return null;
    }

    /**
     * @{inheritDoc}
     */
    @Override
    public Customer saveCustomer(CustomerDto customer) {
        return null;
    }

    /**
     * @{inheritDoc}
     */
    @Override
    public Customer updateCustomer(Customer customer) {
        return null;
    }

    /**
     * @{inheritDoc}
     */
    @Override
    public Long deleteCustomer(Long customerId) {
        return null;
    }
}
