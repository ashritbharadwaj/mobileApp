package com.app.app;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    private final UserService userService;
    
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        User newUser = userService.createUser(user);

        if(newUser != null)
            return ResponseEntity.ok("User added successfully");
        else
            return ResponseEntity.badRequest().body("User not added");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody userLoginRequest user) {
        User foundUser = userService.findByEmail(user.getEmail());

        if(foundUser != null && foundUser.getPassword().equals(user.getPassword()))
            return ResponseEntity.ok("User logged in successfully");
        else
            return ResponseEntity.badRequest().body("User not found or incorrect password");
    }
}
