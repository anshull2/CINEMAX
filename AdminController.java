package com.movierecommender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin")
public class AdminController {
    
    @Autowired
    private MovieRepository movieRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserPreferencesRepository preferencesRepository;
    
    @PostMapping("/movies")
    public ResponseEntity<Map<String, Object>> addMovie(@RequestBody Movie movie) {
        Map<String, Object> response = new HashMap<>();
        try {
            Movie savedMovie = movieRepository.save(movie);
            response.put("success", true);
            response.put("message", "Movie added successfully");
            response.put("movie", savedMovie);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Failed to add movie");
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @PutMapping("/movies/{id}")
    public ResponseEntity<Map<String, Object>> updateMovie(@PathVariable Long id, @RequestBody Movie movie) {
        Map<String, Object> response = new HashMap<>();
        try {
            if (movieRepository.existsById(id)) {
                movie.setId(id);
                Movie updatedMovie = movieRepository.save(movie);
                response.put("success", true);
                response.put("message", "Movie updated successfully");
                response.put("movie", updatedMovie);
                return ResponseEntity.ok(response);
            } else {
                response.put("success", false);
                response.put("message", "Movie not found");
                return ResponseEntity.badRequest().body(response);
            }
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Failed to update movie");
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @DeleteMapping("/movies/{id}")
    public ResponseEntity<Map<String, Object>> deleteMovie(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            if (movieRepository.existsById(id)) {
                movieRepository.deleteById(id);
                response.put("success", true);
                response.put("message", "Movie deleted successfully");
                return ResponseEntity.ok(response);
            } else {
                response.put("success", false);
                response.put("message", "Movie not found");
                return ResponseEntity.badRequest().body(response);
            }
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Failed to delete movie");
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @GetMapping("/users")
    public ResponseEntity<List<Map<String, Object>>> getAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            List<Map<String, Object>> userList = users.stream().map(user -> {
                Map<String, Object> userMap = new HashMap<>();
                userMap.put("id", user.getId());
                userMap.put("username", user.getUsername());
                userMap.put("email", user.getEmail());
                userMap.put("admin", user.isAdmin());
                
                var preferences = preferencesRepository.findByUserId(user.getId());
                if (preferences.isPresent()) {
                    userMap.put("favoriteGenres", preferences.get().getFavoriteGenres());
                    String watchlist = preferences.get().getWatchlist();
                    userMap.put("watchlistCount", watchlist != null ? watchlist.split(",").length : 0);
                } else {
                    userMap.put("favoriteGenres", "");
                    userMap.put("watchlistCount", 0);
                }
                
                return userMap;
            }).toList();
            
            return ResponseEntity.ok(userList);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping("/users/{id}/admin")
    public ResponseEntity<Map<String, Object>> toggleAdminStatus(@PathVariable Long id, @RequestBody Map<String, Boolean> data) {
        Map<String, Object> response = new HashMap<>();
        try {
            var userOpt = userRepository.findById(id);
            if (userOpt.isPresent()) {
                User user = userOpt.get();
                user.setAdmin(data.get("isAdmin"));
                userRepository.save(user);
                
                response.put("success", true);
                response.put("message", "User admin status updated successfully");
                return ResponseEntity.ok(response);
            } else {
                response.put("success", false);
                response.put("message", "User not found");
                return ResponseEntity.badRequest().body(response);
            }
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Failed to update user admin status");
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStatistics() {
        try {
            Map<String, Object> stats = new HashMap<>();
            
            long totalMovies = movieRepository.count();
            long totalUsers = userRepository.count();
            
            List<Movie> movies = movieRepository.findAll();
            double averageRating = movies.stream()
                .mapToDouble(Movie::getRating)
                .average()
                .orElse(0.0);
            
            Map<String, Long> genreCounts = movies.stream()
                .collect(java.util.stream.Collectors.groupingBy(
                    Movie::getGenre,
                    java.util.stream.Collectors.counting()
                ));
            
            List<Map<String, Object>> genreStats = genreCounts.entrySet().stream()
                .map(entry -> {
                    Map<String, Object> genreMap = new HashMap<>();
                    genreMap.put("name", entry.getKey());
                    genreMap.put("count", entry.getValue());
                    return genreMap;
                })
                .sorted((a, b) -> Long.compare((Long)b.get("count"), (Long)a.get("count")))
                .toList();
            
            stats.put("totalMovies", totalMovies);
            stats.put("totalUsers", totalUsers);
            stats.put("totalRatings", totalMovies);
            stats.put("averageRating", Math.round(averageRating * 10.0) / 10.0);
            stats.put("genreStats", genreStats);
            
            return ResponseEntity.ok(stats);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}