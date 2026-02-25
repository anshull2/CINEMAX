// Script to add industry tags to all movies
const bollywoodMovies = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 101, 102, 103, 104, 105, 106, 107, 108];

// Add industry tags to SAMPLE_MOVIES array
SAMPLE_MOVIES.forEach(movie => {
    if (bollywoodMovies.includes(movie.id)) {
        movie.industry = 'Bollywood';
    } else {
        movie.industry = 'Hollywood';
    }
});

console.log('Industry tags added to all movies');