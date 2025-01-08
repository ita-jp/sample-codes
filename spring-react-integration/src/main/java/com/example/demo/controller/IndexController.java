package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
public class IndexController {

    @GetMapping
    public ResponseEntity<UserDTO> index() {
        return ResponseEntity.ok(new UserDTO("Hello, World!", LocalDateTime.now()));
    }

    public record UserDTO(
            String message,
            LocalDateTime timestamp
    ) {
    }
}
