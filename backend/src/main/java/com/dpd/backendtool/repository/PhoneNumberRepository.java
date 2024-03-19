package com.dpd.backendtool.repository;

import com.dpd.backendtool.entity.PhoneNumber;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneNumberRepository extends JpaRepository<PhoneNumber, Long> {
}
