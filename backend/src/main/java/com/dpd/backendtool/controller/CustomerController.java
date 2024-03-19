package com.dpd.backendtool.controller;

import com.dpd.backendtool.dto.CustomerDto;
import com.dpd.backendtool.entity.Customer;
import com.dpd.backendtool.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/customer")
@Controller
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping("/get-all")
    public List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

    @PostMapping("/save")
    public Customer saveCustomer(@RequestBody CustomerDto customer) {
        return customerService.saveCustomer(customer);
    }

    @PutMapping("/update")
    public Customer updateCustomer(@RequestBody Customer customer) {
        return customerService.updateCustomer(customer);
    }

    @DeleteMapping("/delete")
    public Long deleteCustomer(@RequestParam Long customerId) {
        return customerService.deleteCustomer(customerId);
    }
}
