package com.movierecommender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class MovieController {
    
    @Autowired
    private MovieRepository movieRepository;
    
    @GetMapping("/movies")
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }
    
    @GetMapping("/movies/search")
    public List<Movie> searchMovies(@RequestParam String query) {
        return movieRepository.findByTitleContainingIgnoreCase(query);
    }
    
    @GetMapping("/movies/genre/{genre}")
    public List<Movie> getMoviesByGenre(@PathVariable String genre) {
        return movieRepository.findByGenreIgnoreCase(genre);
    }
    
    @GetMapping("/movies/recommendations")
    public List<Movie> getRecommendations() {
        return movieRepository.findTopRatedMovies();
    }
}