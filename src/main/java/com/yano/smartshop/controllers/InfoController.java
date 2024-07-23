package com.yano.smartshop.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/info")
public class InfoController {

    @GetMapping
    public String getInfo(HttpServletRequest request) {
        String requestURL = request.getRequestURL().toString();
        String serverName = request.getServerName();
        int serverPort = request.getServerPort();

        return String.format("Request URL: %s\nServer Name: %s\nServer Port: %d", requestURL, serverName, serverPort);
    }
}
