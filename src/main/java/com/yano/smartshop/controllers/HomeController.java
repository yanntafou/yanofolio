package com.yano.smartshop.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller

public class HomeController {
    @GetMapping({"", "/"})
    public String home() {
        return "index";
    }

    @GetMapping("/contact")
    public String pageContact() {
        return "contact";
    } 

    @GetMapping("/about")
    public String pageAbout() {
        return "about";
    } 
    
    @GetMapping("/register")
    public String showRegisterPage() {
        return "register";
    }
    
    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

}
