CREATE DATABASE movie_recommender;
USE movie_recommender;

CREATE TABLE movies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    year INT,
    rating DECIMAL(3,1),
    description TEXT
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE user_preferences (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    favorite_genres TEXT,
    watched_movies TEXT,
    watchlist TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE user_ratings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    movie_id INT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);

-- Run the all_movies.sql file to insert all 175 movies
-- Source: all_movies.sql
SOURCE all_movies.sql;

-- Sample admin user
INSERT INTO users (username, email, password, is_admin) VALUES
('admin', 'admin@cinerecommend.com', 'admin123', TRUE);