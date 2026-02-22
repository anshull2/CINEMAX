package com.movierecommender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/preferences")
public class UserPreferencesController {
    
    @Autowired
    private UserPreferencesRepository preferencesRepository;
    
    @GetMapping("/{userId}")
    public ResponseEntity<UserPreferences> getUserPreferences(@PathVariable Long userId) {
        var preferences = preferencesRepository.findByUserId(userId);
        if (preferences.isPresent()) {
            return ResponseEntity.ok(preferences.get());
        }
        
        UserPreferences newPreferences = new UserPreferences();
        newPreferences.setUserId(userId);
        newPreferences.setFavoriteGenres("");
        newPreferences.setWatchedMovies("");
        newPreferences.setWatchlist("");
        preferencesRepository.save(newPreferences);
        
        return ResponseEntity.ok(newPreferences);
    }
    
    @PostMapping("/{userId}/watchlist")
    public ResponseEntity<Map<String, Object>> addToWatchlist(@PathVariable Long userId, @RequestBody Map<String, String> data) {
        Map<String, Object> response = new HashMap<>();
        String movieTitle = data.get("movieTitle");
        
        var preferences = preferencesRepository.findByUserId(userId)
            .orElse(new UserPreferences());
        preferences.setUserId(userId);
        
        String currentWatchlist = preferences.getWatchlist() != null ? preferences.getWatchlist() : "";
        if (!currentWatchlist.contains(movieTitle)) {
            preferences.setWatchlist(currentWatchlist.isEmpty() ? movieTitle : currentWatchlist + "," + movieTitle);
            preferencesRepository.save(preferences);
        }
        
        response.put("success", true);
        response.put("message", "Added to watchlist");
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/{userId}/genre")
    public ResponseEntity<Map<String, Object>> updateFavoriteGenres(@PathVariable Long userId, @RequestBody Map<String, String> data) {
        Map<String, Object> response = new HashMap<>();
        String genre = data.get("genre");
        
        var preferences = preferencesRepository.findByUserId(userId)
            .orElse(new UserPreferences());
        preferences.setUserId(userId);
        
        String currentGenres = preferences.getFavoriteGenres() != null ? preferences.getFavoriteGenres() : "";
        if (!currentGenres.contains(genre)) {
            preferences.setFavoriteGenres(currentGenres.isEmpty() ? genre : currentGenres + "," + genre);
            preferencesRepository.save(preferences);
        }
        
        response.put("success", true);
        response.put("message", "Genre preference updated");
        return ResponseEntity.ok(response);
    }
}