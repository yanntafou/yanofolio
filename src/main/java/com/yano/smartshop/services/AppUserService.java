package com.yano.smartshop.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.yano.smartshop.repository.AppUserRepository;

@Service
public class AppUserService implements UserDetailsService {

    //search user in our database from our AppUser repository
    @Autowired
    private AppUserRepository appUserRepository;

    @Override 
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        return appUserRepository.findByEmail(email).orElseThrow();
        
    }
    
}
