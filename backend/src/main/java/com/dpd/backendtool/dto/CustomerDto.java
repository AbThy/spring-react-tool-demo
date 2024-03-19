package com.dpd.backendtool.dto;

import com.dpd.backendtool.entity.Address;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.Date;

@Getter
@AllArgsConstructor
public class CustomerDto {
    private String name;
    private Date dateOfBirth;
    private String placeOfBirth;
    private String taj;
    private String taxId;
    private Address[] addresses;
    private String[] phoneNumbers;
}
