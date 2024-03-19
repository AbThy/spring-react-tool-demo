package com.dpd.backendtool.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private Date dateOfBirth;
    private String placeOfBirth;
    private String taj;
    private String taxId;

    @OneToMany(mappedBy = "customerId")
    private Set<Address> addresses;

    @OneToMany(mappedBy = "customerId")
    private Set<PhoneNumber> phoneNumbers;
}
