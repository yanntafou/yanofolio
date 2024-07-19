//this repository or interface help to read and write our users in the database and will be implemented by SpringJPA
package com.yano.smartshop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yano.smartshop.models.AppUser;
@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Integer> { 

    public Optional<AppUser> findByEmail(String email);
    
} 