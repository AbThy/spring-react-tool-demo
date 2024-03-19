package com.dpd.backendtool.service.impl;

import com.dpd.backendtool.dto.CustomerDto;
import com.dpd.backendtool.entity.Address;
import com.dpd.backendtool.entity.Customer;
import com.dpd.backendtool.entity.PhoneNumber;
import com.dpd.backendtool.repository.AddressRepository;
import com.dpd.backendtool.repository.CustomerRepository;
import com.dpd.backendtool.repository.PhoneNumberRepository;
import com.dpd.backendtool.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.*;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final AddressRepository addressRepository;
    private final PhoneNumberRepository phoneNumberRepository;

    /**
     * {@inheritDoc}
     */
    @Override
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional
    public Customer saveCustomer(CustomerDto dto) {
        //TODO backend validation
        final Customer customer = Customer.builder()
                .name(dto.getName())
                .dateOfBirth(dto.getDateOfBirth())
                .placeOfBirth(dto.getPlaceOfBirth())
                .taxId(dto.getTaxId())
                .taj(dto.getTaj())
                .addresses(Collections.emptySet())
                .phoneNumbers(Collections.emptySet())
                .build();

        Customer saved = customerRepository.save(customer);
        final Set<Address> addressSet = dto.getAddresses();
        final Set<PhoneNumber> phoneNumberSet = dto.getPhoneNumbers();

        addressSet.stream().forEach(address -> address.setCustomerId(saved.getId()));
        phoneNumberSet.stream().forEach(phoneNumber -> phoneNumber.setCustomerId(saved.getId()));

        final List<Address> savedAddresses = addressRepository.saveAll(addressSet);
        final List<PhoneNumber> savedPhoneNumbers = phoneNumberRepository.saveAll(phoneNumberSet);
        saved.setAddresses(new HashSet<>(savedAddresses));
        saved.setPhoneNumbers(new HashSet<>(savedPhoneNumbers));

        return saved;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional
    public Customer updateCustomer(Customer customer) {
        Optional<Customer> optionalCustomer = customerRepository.findById(customer.getId());
        if(optionalCustomer.isEmpty()){
            throw new EntityNotFoundException("Customer not found!");
        }

        addressRepository.saveAll(customer.getAddresses());
        phoneNumberRepository.saveAll(customer.getPhoneNumbers());
        return customerRepository.save(customer);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional
    public Long deleteCustomer(Long customerId) {
        Optional<Customer> optionalCustomer = customerRepository.findById(customerId);
        if(optionalCustomer.isEmpty()){
            throw new EntityNotFoundException("Customer not found!");
        }

        final Set<Address> addressSet = optionalCustomer.get().getAddresses();
        final Set<PhoneNumber> phoneNumberSet = optionalCustomer.get().getPhoneNumbers();
        addressSet.stream().forEach(address -> addressRepository.delete(address));
        phoneNumberSet.stream().forEach(phoneNumber -> phoneNumberRepository.delete(phoneNumber));
        customerRepository.deleteById(customerId);

        return customerId;
    }
}
