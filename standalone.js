// Standalone movie data
const movies = [
    { id: 1, title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, rating: 9.3, description: 'Two imprisoned men bond over years, finding solace and redemption.' },
    { id: 2, title: 'The Godfather', genre: 'Crime', year: 1972, rating: 9.2, description: 'The aging patriarch of a crime dynasty transfers control to his son.' },
    { id: 3, title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0, description: 'Batman faces the Joker in a battle for Gotham City.' },
    { id: 4, title: 'Pulp Fiction', genre: 'Crime', year: 1994, rating: 8.9, description: 'Interconnected stories of crime in Los Angeles.' },
    { id: 5, title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8, description: 'A thief enters dreams to plant an idea.' },
    { id: 6, title: 'Forrest Gump', genre: 'Drama', year: 1994, rating: 8.8, description: 'A man with low IQ accomplishes great things.' },
    { id: 7, title: 'The Matrix', genre: 'Sci-Fi', year: 1999, rating: 8.7, description: 'A hacker discovers reality is a simulation.' },
    { id: 8, title: 'Goodfellas', genre: 'Crime', year: 1990, rating: 8.7, description: 'The story of Henry Hill and his life in the mob.' }
];

let users = [];
let currentUser = null;

function createStars(rating) {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 1;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '☆';
    }
    while (stars.length < 5) {
        stars += '☆';
    }
    
    return stars;
}

function getMovieEmoji(genre) {
    const emojiMap = {
        'Action': '⚔️',
        'Drama': '🎭',
        'Crime': '🕵️',
        'Sci-Fi': '🚀',
        'Comedy': '😂',
        'Thriller': '🔪'
    };
    return emojiMap[genre] || '🎬';
}

function renderMovies(moviesToRender = movies) {
    const moviesGrid = document.getElementById('moviesGrid');
    moviesGrid.innerHTML = '';

    moviesToRender.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <div class="movie-poster">${getMovieEmoji(movie.genre)}</div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-year">${movie.year}</div>
                <div class="movie-genre">${movie.genre}</div>
                <div class="rating">
                    <span class="stars">${createStars(movie.rating)}</span>
                    <span class="rating-score">${movie.rating}/10</span>
                </div>
                <button class="watch-btn" onclick="addToWatchlist('${movie.title}')">Add to Watchlist</button>
            </div>
        `;
        moviesGrid.appendChild(movieCard);
    });
}

function addToWatchlist(movieTitle) {
    const btn = event.target;
    btn.textContent = 'Added! ✓';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = 'Add to Watchlist';
        btn.style.background = 'linear-gradient(45deg, #f5c518, #e6b800)';
    }, 2000);
}

function searchMovies() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) {
        renderMovies(movies);
        return;
    }
    
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query)
    );
    renderMovies(filteredMovies);
}

function filterByGenre(genre) {
    if (genre === 'all') {
        renderMovies(movies);
    } else {
        const filteredMovies = movies.filter(movie => 
            movie.genre.toLowerCase() === genre.toLowerCase()
        );
        renderMovies(filteredMovies);
    }
}

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const genre = btn.dataset.genre;
        filterByGenre(genre);
    });
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', searchMovies);

// User authentication
function checkUserAuth() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const userSection = document.getElementById('userSection');
    
    if (user) {
        userSection.innerHTML = `
            <span class="nav-link">Welcome, ${user.username}!</span>
            <a href="#" class="nav-link" onclick="logout()">Logout</a>
        `;
        currentUser = user;
    } else {
        userSection.innerHTML = `
            <a href="auth-standalone.html" class="nav-link">Login</a>
        `;
        currentUser = null;
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    checkUserAuth();
    alert('Logged out successfully!');
}

// Initialize the page
window.onload = function() {
    checkUserAuth();
    renderMovies();
};