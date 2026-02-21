package com.movierecommender;

import jakarta.persistence.*;

@Entity
@Table(name = "user_preferences")
public class UserPreferences {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "user_id")
    private Long userId;
    
    @Column(name = "favorite_genres")
    private String favoriteGenres;
    
    @Column(name = "watched_movies")
    private String watchedMovies;
    
    private String watchlist;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getFavoriteGenres() { return favoriteGenres; }
    public void setFavoriteGenres(String favoriteGenres) { this.favoriteGenres = favoriteGenres; }
    public String getWatchedMovies() { return watchedMovies; }
    public void setWatchedMovies(String watchedMovies) { this.watchedMovies = watchedMovies; }
    public String getWatchlist() { return watchlist; }
    public void setWatchlist(String watchlist) { this.watchlist = watchlist; }
}