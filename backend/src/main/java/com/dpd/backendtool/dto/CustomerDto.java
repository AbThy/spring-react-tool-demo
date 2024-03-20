package com.dpd.backendtool.dto;

import com.dpd.backendtool.entity.Address;
import com.dpd.backendtool.entity.PhoneNumber;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;
import java.util.Set;

@Getter
@AllArgsConstructor
public class CustomerDto {
    private String email;
    private String name;
    private Date dateOfBirth;
    private String placeOfBirth;
    private String taj;
    private String taxId;
    private Set<Address> addresses;
    private Set<PhoneNumber> phoneNumbers;
}
