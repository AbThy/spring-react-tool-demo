package com.dpd.backendtool.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Builder
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long customerId;

    private int postalCode;
    private String city;
    private String street;
    private int houseNumber;
    private String other;
}
