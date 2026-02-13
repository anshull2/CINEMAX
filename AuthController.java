package com.movierecommender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private UserRepository userRepository;
    
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        
        if (userRepository.existsByUsername(user.getUsername())) {
            response.put("success", false);
            response.put("message", "Username already exists");
            return ResponseEntity.badRequest().body(response);
        }
        
        if (userRepository.existsByEmail(user.getEmail())) {
            response.put("success", false);
            response.put("message", "Email already exists");
            return ResponseEntity.badRequest().body(response);
        }
        
        userRepository.save(user);
        response.put("success", true);
        response.put("message", "User registered successfully");
        response.put("user", Map.of("id", user.getId(), "username", user.getUsername()));
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginData) {
        Map<String, Object> response = new HashMap<>();
        String username = loginData.get("username");
        String password = loginData.get("password");
        
        System.out.println("Login attempt - Username: " + username + ", Password: " + password);
        
        var user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            System.out.println("User found - DB Password: " + user.get().getPassword());
            if (user.get().getPassword() != null && user.get().getPassword().equals(password)) {
                response.put("success", true);
                response.put("message", "Login successful");
                response.put("user", Map.of("id", user.get().getId(), "username", user.get().getUsername(), "isAdmin", user.get().isAdmin()));
                return ResponseEntity.ok(response);
            }
        } else {
            System.out.println("User not found");
        }
        
        response.put("success", false);
        response.put("message", "Invalid username or password");
        return ResponseEntity.badRequest().body(response);
    }
    
    @PostMapping("/google")
    public ResponseEntity<Map<String, Object>> googleLogin(@RequestBody Map<String, String> userData) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            String email = userData.get("email");
            String name = userData.get("name");
            
            var existingUser = userRepository.findByEmail(email);
            User user;
            
            if (existingUser.isPresent()) {
                user = existingUser.get();
            } else {
                user = new User();
                user.setUsername(name.replaceAll(" ", "").toLowerCase());
                user.setEmail(email);
                user.setPassword("");
                user.setAdmin(false);
                user = userRepository.save(user);
            }
            
            response.put("success", true);
            response.put("message", "Login successful");
            response.put("user", Map.of("id", user.getId(), "username", user.getUsername(), "email", user.getEmail(), "isAdmin", user.isAdmin()));
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            System.out.println("Login failed: " + e.getMessage());
            response.put("success", false);
            response.put("message", "Authentication failed");
            return ResponseEntity.badRequest().body(response);
        }
    }
}