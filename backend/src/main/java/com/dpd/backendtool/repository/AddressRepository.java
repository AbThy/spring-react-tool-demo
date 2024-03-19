package com.dpd.backendtool.repository;

import com.dpd.backendtool.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
