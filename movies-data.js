// Shared movie data between admin and user dashboards
window.MOVIE_DATA = JSON.parse(localStorage.getItem('movies')) || [
    {id: 1, title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, rating: 9.3, description: 'Two imprisoned men bond over years, finding solace and redemption.', poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'},
    {id: 2, title: 'The Godfather', genre: 'Crime', year: 1972, rating: 9.2, description: 'The aging patriarch of a crime dynasty transfers control to his son.', poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 3, title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0, description: 'Batman faces the Joker in a battle for Gotham City.', poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'},
    {id: 4, title: 'Pulp Fiction', genre: 'Crime', year: 1994, rating: 8.9, description: 'Interconnected stories of crime in Los Angeles.', poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 5, title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8, description: 'A thief enters dreams to plant an idea.', poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'}
];

// Save movies to localStorage
window.saveMovies = function() {
    localStorage.setItem('movies', JSON.stringify(window.MOVIE_DATA));
    console.log('Movies saved:', window.MOVIE_DATA.length);
};

// Initialize localStorage
if (!localStorage.getItem('movies')) {
    window.saveMovies();
}