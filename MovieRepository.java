package com.movierecommender;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByTitleContainingIgnoreCase(String title);
    List<Movie> findByGenreIgnoreCase(String genre);
    
    @Query("SELECT m FROM Movie m ORDER BY m.rating DESC")
    List<Movie> findTopRatedMovies();
}