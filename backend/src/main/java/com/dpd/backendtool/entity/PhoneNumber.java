package com.dpd.backendtool.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Table(name = "phone_number")
public class PhoneNumber {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long customerId;

    private int countryCode;
    private int number;
}
