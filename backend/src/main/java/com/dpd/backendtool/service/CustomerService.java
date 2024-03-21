package com.dpd.backendtool.service;

import com.dpd.backendtool.dto.CustomerDto;
import com.dpd.backendtool.entity.Customer;

import java.util.List;

public interface CustomerService {

    /**
     * Lists all saved customers.
     * @return list of Customer entity
     */
    List<Customer> getCustomers();

    /**
     * Saves a new customer.
     * @param customer Customer DTO to save
     * @return The saved customer with id
     */
    Customer saveCustomer(CustomerDto customer);

    /**
     * Updates a customer
     * @param customer The CustomerUpdateDto to save
     * @return The updated customer
     */
    Customer updateCustomer(Customer customer);

    /**
     * Soft deletes a customer
     * @param customerId The customer's id we want to delete
     * @return The id of the deleted customer
     */
    Customer deleteCustomer(Long customerId);
}
