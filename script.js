const API_BASE = 'http://localhost:8080/api';

// Sample movies data
let SAMPLE_MOVIES = [
    {id: 1, title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, rating: 9.3, description: 'Two imprisoned men bond over years, finding solace and redemption.', poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg', industry: 'Hollywood'},
    {id: 2, title: 'The Godfather', genre: 'Crime', year: 1972, rating: 9.2, description: 'The aging patriarch of a crime dynasty transfers control to his son.', poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 3, title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0, description: 'Batman faces the Joker in a battle for Gotham City.', poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'},
    {id: 4, title: 'Pulp Fiction', genre: 'Crime', year: 1994, rating: 8.9, description: 'Interconnected stories of crime in Los Angeles.', poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 5, title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8, description: 'A thief enters dreams to plant an idea.', poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'},
    {id: 6, title: 'Forrest Gump', genre: 'Drama', year: 1994, rating: 8.8, description: 'A man with low IQ accomplishes great things.', poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {id: 7, title: 'The Matrix', genre: 'Sci-Fi', year: 1999, rating: 8.7, description: 'A hacker discovers reality is a simulation.', poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 8, title: 'Goodfellas', genre: 'Crime', year: 1990, rating: 8.7, description: 'The story of Henry Hill and his life in the mob.', poster: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjA4YTQyYTBmMjNmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 9, title: 'Fight Club', genre: 'Thriller', year: 1999, rating: 8.8, description: 'An insomniac office worker forms an underground fight club.', poster: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'},
    {id: 10, title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991, rating: 8.6, description: 'A young FBI cadet seeks help from Hannibal Lecter.', poster: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 11, title: 'Saving Private Ryan', genre: 'Action', year: 1998, rating: 8.6, description: 'Following D-Day, soldiers search for a paratrooper.', poster: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'},
    {id: 12, title: 'Interstellar', genre: 'Sci-Fi', year: 2014, rating: 8.6, description: 'Explorers travel through a wormhole in space.', poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {id: 13, title: 'Se7en', genre: 'Thriller', year: 1995, rating: 8.6, description: 'Two detectives hunt a serial killer.', poster: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 14, title: 'Spirited Away', genre: 'Comedy', year: 2001, rating: 8.6, description: 'A girl enters a world of spirits.', poster: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {id: 15, title: 'Gladiator', genre: 'Action', year: 2000, rating: 8.5, description: 'A Roman General seeks vengeance.', poster: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 16, title: 'WALL-E', genre: 'Comedy', year: 2008, rating: 8.4, description: 'A robot finds love in the distant future.', poster: 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg'},
    {id: 17, title: 'The Lion King', genre: 'Comedy', year: 1994, rating: 8.5, description: 'A young lion prince flees his kingdom.', poster: 'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNjYtMmZmNTkzNjJhZGI4XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg'},
    {id: 18, title: 'Back to the Future', genre: 'Comedy', year: 1985, rating: 8.5, description: 'A teenager travels 30 years into the past.', poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {id: 19, title: 'Terminator 2', genre: 'Sci-Fi', year: 1991, rating: 8.5, description: 'A cyborg protects John Connor.', poster: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 20, title: 'Avengers: Endgame', genre: 'Action', year: 2019, rating: 8.4, description: 'The Avengers assemble to reverse Thanos actions.', poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'},
    {id: 21, title: 'Titanic', genre: 'Drama', year: 1997, rating: 7.9, description: 'A love story aboard the doomed ship.', poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},
    {id: 22, title: 'Jurassic Park', genre: 'Action', year: 1993, rating: 8.1, description: 'Dinosaurs are brought back to life.', poster: 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg'},
    {id: 23, title: 'Star Wars: A New Hope', genre: 'Sci-Fi', year: 1977, rating: 8.6, description: 'A young farm boy joins the Rebellion.', poster: 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx@._V1_SX300.jpg'},
    {id: 24, title: 'The Lord of the Rings: The Fellowship', genre: 'Action', year: 2001, rating: 8.8, description: 'A hobbit begins an epic journey.', poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg'},
    {id: 25, title: 'Spider-Man: No Way Home', genre: 'Action', year: 2021, rating: 8.2, description: 'Spider-Man faces villains from other dimensions.', poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg'},
    {id: 26, title: 'Top Gun: Maverick', genre: 'Action', year: 2022, rating: 8.3, description: 'Maverick returns to train a new generation.', poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg'},
    {id: 27, title: 'Dune', genre: 'Sci-Fi', year: 2021, rating: 8.0, description: 'A noble family fights for control of a desert planet.', poster: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {id: 28, title: 'Joker', genre: 'Thriller', year: 2019, rating: 8.4, description: 'The origin story of Batman\'s greatest enemy.', poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'},
    {id: 29, title: 'Parasite', genre: 'Thriller', year: 2019, rating: 8.5, description: 'A poor family infiltrates a wealthy household.', poster: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg'},
    {id: 30, title: 'Black Panther', genre: 'Action', year: 2018, rating: 7.3, description: 'The king of Wakanda protects his nation.', poster: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg'},
    {id: 31, title: 'Whiplash', genre: 'Drama', year: 2014, rating: 8.5, description: 'A young drummer pursues perfection.', poster: 'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {id: 32, title: 'La La Land', genre: 'Comedy', year: 2016, rating: 8.0, description: 'A jazz musician and an actress fall in love.', poster: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg'},
    {id: 33, title: 'Get Out', genre: 'Thriller', year: 2017, rating: 7.7, description: 'A young man visits his girlfriend\'s family estate.', poster: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg'},
    {id: 34, title: 'Blade Runner 2049', genre: 'Sci-Fi', year: 2017, rating: 8.0, description: 'A young blade runner discovers a secret.', poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg'},
    {id: 35, title: 'The Grand Budapest Hotel', genre: 'Comedy', year: 2014, rating: 8.1, description: 'The adventures of a legendary concierge.', poster: 'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg'},
    {id: 36, title: 'Her', genre: 'Drama', year: 2013, rating: 8.0, description: 'A man falls in love with an AI.', poster: 'https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg'},
    {id: 37, title: 'Moonlight', genre: 'Drama', year: 2016, rating: 7.4, description: 'A young man\'s journey of self-discovery.', poster: 'https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg'},
    {id: 38, title: 'Once Upon a Time in Hollywood', genre: 'Drama', year: 2019, rating: 7.6, description: 'A fading actor and his stunt double navigate 1969 Hollywood.', poster: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg'},
    {id: 39, title: 'The Wolf of Wall Street', genre: 'Crime', year: 2013, rating: 8.2, description: 'The rise and fall of a stockbroker.', poster: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg'},
    {id: 40, title: 'Knives Out', genre: 'Thriller', year: 2019, rating: 7.9, description: 'A detective investigates a murder mystery.', poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg'},
    {id: 41, title: 'Ford v Ferrari', genre: 'Action', year: 2019, rating: 8.1, description: 'Ford challenges Ferrari at Le Mans.', poster: 'https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtODU2My00NTk2LTgwMjMtZTRlYWJkZjA3ZDdhXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg'},
    {id: 42, title: 'Everything Everywhere All at Once', genre: 'Sci-Fi', year: 2022, rating: 7.8, description: 'A woman explores parallel universes.', poster: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg'},
    {id: 43, title: 'The Batman', genre: 'Action', year: 2022, rating: 7.8, description: 'Batman investigates corruption in Gotham.', poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg'},
    {id: 44, title: 'No Time to Die', genre: 'Action', year: 2021, rating: 7.3, description: 'James Bond\'s final mission.', poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg'},
    {id: 45, title: 'Oppenheimer', genre: 'Drama', year: 2023, rating: 8.3, description: 'The story of the atomic bomb\'s creation.', poster: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg'},
    {id: 46, title: 'Barbie', genre: 'Comedy', year: 2023, rating: 6.9, description: 'Barbie and Ken have the time of their lives.', poster: 'https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 47, title: 'Avatar: The Way of Water', genre: 'Sci-Fi', year: 2022, rating: 7.6, description: 'Jake Sully lives with his newfound family.', poster: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg'},
    {id: 48, title: 'The Revenant', genre: 'Drama', year: 2015, rating: 8.0, description: 'A frontiersman on a fur trading expedition.', poster: 'https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 49, title: 'Deadpool', genre: 'Action', year: 2016, rating: 8.0, description: 'A wisecracking mercenary gets experiment.', poster: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 50, title: 'Wonder Woman', genre: 'Action', year: 2017, rating: 7.4, description: 'An Amazon princess discovers her full powers.', poster: 'https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 51, title: 'Dangal', genre: 'Drama', year: 2016, rating: 8.4, description: 'A former wrestler trains his daughters.', poster: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg', industry: 'Bollywood'},
    {id: 52, title: '3 Idiots', genre: 'Comedy', year: 2009, rating: 8.4, description: 'Two friends search for their long lost companion.', poster: 'https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 53, title: 'Lagaan', genre: 'Drama', year: 2001, rating: 8.1, description: 'Villagers accept a challenge from British officers.', poster: 'https://m.media-amazon.com/images/M/MV5BNDEzNjU3YjctYTdhZC00MWFjLWI2MjctZGQ5MjNlZjU4ZmNkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 54, title: 'Zindagi Na Milegi Dobara', genre: 'Comedy', year: 2011, rating: 8.2, description: 'Three friends on a bachelor trip.', poster: 'https://m.media-amazon.com/images/M/MV5BZGFkMzRhZjAtYzAzOC00NmY0LWI3YzYtN2MxYWJkODMwMjkxXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg'},
    {id: 55, title: 'Queen', genre: 'Comedy', year: 2013, rating: 8.2, description: 'A woman goes on her honeymoon alone.', poster: 'https://m.media-amazon.com/images/M/MV5BMTMxOTMwNDI4NF5BMl5BanBnXkFtZTgwNzE4ODkxMTE@._V1_SX300.jpg'},
    {id: 56, title: 'Taare Zameen Par', genre: 'Drama', year: 2007, rating: 8.4, description: 'A teacher helps a dyslexic child.', poster: 'https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI2LWJhNzYtMmZiYTdmOTkyMjE1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {id: 57, title: 'Gully Boy', genre: 'Drama', year: 2019, rating: 7.9, description: 'A street rapper rises from the slums.', poster: 'https://m.media-amazon.com/images/M/MV5BM2Y2NzAzOGUtYWJlYS00MWZmLWE0ODEtNGE3YzI3NWVkMGY4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 58, title: 'Pink', genre: 'Thriller', year: 2016, rating: 8.1, description: 'Three girls fight a legal battle.', poster: 'https://m.media-amazon.com/images/M/MV5BYzFkZjMxOTQtYjdkNC00NGJkLWJhMWMtNDgxYWRmYmQ2YjlhXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg'},
    {id: 59, title: 'Andhadhun', genre: 'Thriller', year: 2018, rating: 8.2, description: 'A blind pianist gets embroiled in a murder mystery.', poster: 'https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 60, title: 'Article 15', genre: 'Crime', year: 2019, rating: 8.1, description: 'A police officer investigates missing girls.', poster: 'https://m.media-amazon.com/images/M/MV5BNGZlYjJkYWEtMDkwYS00YjlmLWIyYWYtMzBhYzE2NzgyMGY0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 61, title: 'Sholay', genre: 'Action', year: 1975, rating: 8.2, description: 'Two criminals help a retired police officer.', poster: 'https://m.media-amazon.com/images/M/MV5BYTBmNjQ1NjUtZGJlNS00OWQ3LWFkNjMtNTY3YzgwMzAyMzJhXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SX300.jpg'},
    {id: 62, title: 'Mughal-E-Azam', genre: 'Drama', year: 1960, rating: 8.1, description: 'A love story between a prince and a court dancer.', poster: 'https://m.media-amazon.com/images/M/MV5BNTllYzVmMzItYmJlNy00ZjVmLWE2ODYtZGY3ZWZjN2Q4NzJjXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SX300.jpg'},
    {id: 63, title: 'Dilwale Dulhania Le Jayenge', genre: 'Comedy', year: 1995, rating: 8.1, description: 'A young couple falls in love during a trip.', poster: 'https://m.media-amazon.com/images/M/MV5BNzc3Nzg1NTMtZDEzOC00YWFjLWE4NWItNjJhNGJkYzc2ZDJjXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SX300.jpg'},
    {id: 64, title: 'Kuch Kuch Hota Hai', genre: 'Comedy', year: 1998, rating: 7.5, description: 'A love triangle spanning years.', poster: 'https://m.media-amazon.com/images/M/MV5BNjI0MTg5NjAtYzM4ZC00ZjdkLTkwZjYtNDc5YjFkZjY0NzJjXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SX300.jpg'},
    {id: 65, title: 'My Name is Khan', genre: 'Drama', year: 2010, rating: 7.9, description: 'A man with Asperger\'s syndrome on a journey.', poster: 'https://m.media-amazon.com/images/M/MV5BMjA4NDE3NzQ1M15BMl5BanBnXkFtZTcwMDY0MDEwMw@@._V1_SX300.jpg'},
    {id: 66, title: 'Rang De Basanti', genre: 'Drama', year: 2006, rating: 8.1, description: 'Students fight against corruption.', poster: 'https://m.media-amazon.com/images/M/MV5BNDEyYTAyNzAtMzUwZS00NGJkLWJhMDYtMDQ1NWY2NTI4MzJjXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SX300.jpg'},
    {id: 67, title: 'Baahubali 2', genre: 'Action', year: 2017, rating: 8.2, description: 'A warrior\'s journey to reclaim his kingdom.', poster: 'https://m.media-amazon.com/images/M/MV5BYTMxNGY4ZjctZjNhZC00NzJkLWI0NjUtYzQwZTNiMWQ4ZjkwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 68, title: 'RRR', genre: 'Action', year: 2022, rating: 7.9, description: 'Two legendary revolutionaries fight British rule.', poster: 'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 69, title: 'KGF Chapter 2', genre: 'Action', year: 2022, rating: 8.4, description: 'Rocky continues his rise to power.', poster: 'https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 70, title: 'Pushpa', genre: 'Action', year: 2021, rating: 7.6, description: 'A laborer rises in the world of red sandalwood smuggling.', poster: 'https://m.media-amazon.com/images/M/MV5BNGZlYjJkYWEtMDkwYS00YjlmLWIyYWYtMzBhYzE2NzgyMGY0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 71, title: 'The Pursuit of Happyness', genre: 'Drama', year: 2006, rating: 8.0, description: 'A struggling salesman takes custody of his son.', poster: 'https://m.media-amazon.com/images/M/MV5BMTdhZDkyNzQtNDNhOC00NzYwLWJjZGItMTU4NzY4MDgzYjM0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {id: 72, title: 'The Green Mile', genre: 'Drama', year: 1999, rating: 8.6, description: 'A death row corrections officer encounters a miracle.', poster: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg'},
    {id: 73, title: 'Forrest Gump', genre: 'Drama', year: 1994, rating: 8.8, description: 'Life is like a box of chocolates.', poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {id: 74, title: 'Schindler\'s List', genre: 'Drama', year: 1993, rating: 9.0, description: 'A businessman saves lives during the Holocaust.', poster: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 75, title: 'One Flew Over the Cuckoo\'s Nest', genre: 'Drama', year: 1975, rating: 8.7, description: 'A criminal pleads insanity and is admitted to a mental institution.', poster: 'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {id: 76, title: 'The Pianist', genre: 'Drama', year: 2002, rating: 8.5, description: 'A Polish Jewish musician struggles to survive.', poster: 'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 77, title: 'Life is Beautiful', genre: 'Comedy', year: 1997, rating: 8.6, description: 'A Jewish father protects his son in a concentration camp.', poster: 'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {id: 78, title: 'The Departed', genre: 'Crime', year: 2006, rating: 8.5, description: 'An undercover cop and a police informant.', poster: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg'},
    {id: 79, title: 'The Prestige', genre: 'Thriller', year: 2006, rating: 8.5, description: 'Two magicians engage in competitive one-upmanship.', poster: 'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg'},
    {id: 80, title: 'Memento', genre: 'Thriller', year: 2000, rating: 8.4, description: 'A man with short-term memory loss hunts his wife\'s killer.', poster: 'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 81, title: 'The Usual Suspects', genre: 'Crime', year: 1995, rating: 8.5, description: 'A sole survivor tells of the twisty events.', poster: 'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg'},
    {id: 82, title: 'Leon: The Professional', genre: 'Action', year: 1994, rating: 8.5, description: 'A professional assassin reluctantly takes care of a 12-year-old girl.', poster: 'https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00OWM2LWI3NmYtNWUzMDdkMzU2YjIyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'},
    {id: 83, title: 'Apocalypse Now', genre: 'Drama', year: 1979, rating: 8.4, description: 'A U.S. Army officer serves as a judge in a court-martial.', poster: 'https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWE1OWMtYjNjNTM3ZTQzNTRlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 84, title: 'Alien', genre: 'Sci-Fi', year: 1979, rating: 8.5, description: 'The crew of a commercial spacecraft encounters a deadly lifeform.', poster: 'https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'},
    {id: 85, title: 'Sunset Boulevard', genre: 'Drama', year: 1950, rating: 8.4, description: 'A screenwriter develops a dangerous relationship.', poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg'},
    {id: 86, title: 'Dr. Strangelove', genre: 'Comedy', year: 1964, rating: 8.4, description: 'An insane general triggers a path to nuclear holocaust.', poster: 'https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 87, title: 'The Great Dictator', genre: 'Comedy', year: 1940, rating: 8.4, description: 'Dictator Adenoid Hynkel tries to expand his empire.', poster: 'https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 88, title: 'Paths of Glory', genre: 'Drama', year: 1957, rating: 8.4, description: 'A colonel defends three scapegoats on trial for cowardice.', poster: 'https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg'},
    {id: 89, title: 'Citizen Kane', genre: 'Drama', year: 1941, rating: 8.3, description: 'Following the death of publishing tycoon Charles Foster Kane.', poster: 'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItSjFkYy00OGQyLWJhZGItNjRmNWE1ZjdiZDJlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 90, title: 'Singin\' in the Rain', genre: 'Comedy', year: 1952, rating: 8.3, description: 'A silent film production company transitions to sound films.', poster: 'https://m.media-amazon.com/images/M/MV5BZDRjNGViNjQtOThlMi00MTE0LWJhNDItZTUyMjMxMzVlNGYwXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'},
    {id: 91, title: 'Bicycle Thieves', genre: 'Drama', year: 1948, rating: 8.3, description: 'A man searches for his stolen bicycle.', poster: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODgtMTNkNy00MjI2LWJiZWMtMGRkN2ZlZWY1NjJkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 92, title: 'Lawrence of Arabia', genre: 'Drama', year: 1962, rating: 8.3, description: 'The story of T.E. Lawrence.', poster: 'https://m.media-amazon.com/images/M/MV5BYTU5NGExN2MtMWRlNy00OWRhLTkzNGUtNDk4MDg2M2E0OGUzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'},
    {id: 93, title: 'Vertigo', genre: 'Thriller', year: 1958, rating: 8.3, description: 'A former police detective juggles wrestling with his personal demons.', poster: 'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'},
    {id: 94, title: 'M', genre: 'Thriller', year: 1931, rating: 8.3, description: 'When the police in a German city are unable to catch a child-murderer.', poster: 'https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_SX300.jpg'},
    {id: 95, title: 'Rear Window', genre: 'Thriller', year: 1954, rating: 8.5, description: 'A wheelchair-bound photographer spies on his neighbors.', poster: 'https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {id: 96, title: 'Psycho', genre: 'Thriller', year: 1960, rating: 8.5, description: 'A Phoenix secretary embezzles money from her employer.', poster: 'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 97, title: 'Casablanca', genre: 'Drama', year: 1942, rating: 8.5, description: 'A cynical expatriate American cafe owner struggles to decide.', poster: 'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'},
    {id: 98, title: 'City Lights', genre: 'Comedy', year: 1931, rating: 8.5, description: 'The Tramp struggles to help a blind flower girl.', poster: 'https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 99, title: 'Modern Times', genre: 'Comedy', year: 1936, rating: 8.5, description: 'The Tramp struggles to live in modern industrial society.', poster: 'https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 100, title: 'The Gold Rush', genre: 'Comedy', year: 1925, rating: 8.2, description: 'A prospector goes to the Klondike during the 1890s gold rush.', poster: 'https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzNy00MzlhLTlmNDMtMWE1Y2IzZDdlNzY5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg'},
    {id: 101, title: 'Bahubali: The Beginning', genre: 'Action', year: 2015, rating: 8.0, description: 'A warrior rises to protect his kingdom.', poster: 'https://m.media-amazon.com/images/M/MV5BYTMxNGY4ZjctZjNhZC00NzJkLWI0NjUtYzQwZTNiMWQ4ZjkwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'},
    {id: 102, title: 'Tumhari Sulu', genre: 'Comedy', year: 2017, rating: 7.1, description: 'A housewife becomes a radio jockey.', poster: 'https://image.tmdb.org/t/p/w300/xRWht48C2V8XNfzvPehyClOvDni.jpg'},
    {id: 103, title: 'Stree', genre: 'Comedy', year: 2018, rating: 7.5, description: 'A horror-comedy about a mysterious woman.', poster: 'https://image.tmdb.org/t/p/w300/6ZdvqP6OC8CajP7yKpKGOYp8w3d.jpg'},
    {id: 104, title: 'Uri: The Surgical Strike', genre: 'Action', year: 2019, rating: 8.2, description: 'Indian army conducts surgical strikes.', poster: 'https://image.tmdb.org/t/p/w300/yj8BCs7lw4lOjuLNfSoI0ZfXl1Z.jpg'},
    {id: 105, title: 'Super 30', genre: 'Drama', year: 2019, rating: 7.9, description: 'A mathematician teaches underprivileged students.', poster: 'https://image.tmdb.org/t/p/w300/iqphbZBz6NPbKwOtl9jzaMehmeC.jpg'},
    {id: 106, title: 'Bhaag Milkha Bhaag', genre: 'Drama', year: 2013, rating: 8.2, description: 'The story of athlete Milkha Singh.', poster: 'https://image.tmdb.org/t/p/w300/isKdKVRJiLYbDTLu3mq9GHSKUx.jpg'},
    {id: 107, title: 'Haider', genre: 'Drama', year: 2014, rating: 8.1, description: 'A young man returns to Kashmir.', poster: 'https://image.tmdb.org/t/p/w300/tt0nHW9IISkEWlGDdOKVGqOWyL.jpg'},
    {id: 108, title: 'Masaan', genre: 'Drama', year: 2015, rating: 8.1, description: 'Four lives intersect in Varanasi.', poster: 'https://image.tmdb.org/t/p/w300/zQC30e2GNKxAWs7BPu7KP7bBnnZ.jpg'},
    {id: 110, title: 'The Avengers', genre: 'Action', year: 2012, rating: 8.0, description: 'Superheroes assemble to save the world.', poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
    {id: 111, title: 'Iron Man', genre: 'Action', year: 2008, rating: 7.9, description: 'A billionaire builds a powered suit of armor.', poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'},
    {id: 112, title: 'Captain America: The Winter Soldier', genre: 'Action', year: 2014, rating: 7.7, description: 'Steve Rogers struggles to embrace his role.', poster: 'https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg'},
    {id: 113, title: 'Guardians of the Galaxy', genre: 'Action', year: 2014, rating: 8.0, description: 'A group of intergalactic criminals go on the run.', poster: 'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg'},
    {id: 114, title: 'Thor: Ragnarok', genre: 'Action', year: 2017, rating: 7.9, description: 'Thor must escape to save Asgard.', poster: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg'},
    {id: 115, title: 'Doctor Strange', genre: 'Action', year: 2016, rating: 7.5, description: 'A neurosurgeon discovers the hidden world of magic.', poster: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'},
    {id: 116, title: 'Ant-Man', genre: 'Action', year: 2015, rating: 7.3, description: 'A thief becomes a shrinking superhero.', poster: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg'},
    {id: 117, title: 'The Incredibles', genre: 'Comedy', year: 2004, rating: 8.0, description: 'A family of superheroes is forced to hide their powers.', poster: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg'},
    {id: 118, title: 'Finding Nemo', genre: 'Comedy', year: 2003, rating: 8.2, description: 'A clownfish searches for his missing son.', poster: 'https://m.media-amazon.com/images/M/MV5BZjMxYzc4MzEtZDg4YS00NjMwLWIzOTktOTRiYWI3YzI5YmQ3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 119, title: 'Toy Story', genre: 'Comedy', year: 1995, rating: 8.3, description: 'A cowboy doll is profoundly threatened.', poster: 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg'},
    {id: 120, title: 'Up', genre: 'Comedy', year: 2009, rating: 8.3, description: 'An elderly man travels to South America.', poster: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg'},
    {id: 121, title: 'Inside Out', genre: 'Comedy', year: 2015, rating: 8.1, description: 'The emotions of a young girl.', poster: 'https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg'},
    {id: 122, title: 'Coco', genre: 'Comedy', year: 2017, rating: 8.4, description: 'A boy enters the Land of the Dead.', poster: 'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg'},
    {id: 123, title: 'Frozen', genre: 'Comedy', year: 2013, rating: 7.4, description: 'A fearless princess sets off on a journey.', poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg'},
    {id: 124, title: 'Moana', genre: 'Comedy', year: 2016, rating: 7.6, description: 'A spirited teenager sails out on a daring mission.', poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg'},
    {id: 125, title: 'Zootopia', genre: 'Comedy', year: 2016, rating: 8.0, description: 'A rabbit cop and a cynical con artist fox.', poster: 'https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg'},
    {id: 126, title: 'The Jungle Book', genre: 'Comedy', year: 2016, rating: 7.4, description: 'A man-cub raised by wolves.', poster: 'https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_SX300.jpg'},
    {id: 127, title: 'The Fast and the Furious', genre: 'Action', year: 2001, rating: 6.8, description: 'An undercover cop infiltrates a street racing crew.', poster: 'https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 128, title: 'Fast Five', genre: 'Action', year: 2011, rating: 7.3, description: 'Dom and his crew plan a heist.', poster: 'https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg'},
    {id: 129, title: 'Mission: Impossible', genre: 'Action', year: 1996, rating: 7.1, description: 'An agent is framed for a failed mission.', poster: 'https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg'},
    {id: 130, title: 'John Wick', genre: 'Action', year: 2014, rating: 7.4, description: 'An ex-hitman comes out of retirement.', poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg'},
    {id: 131, title: 'The Bourne Identity', genre: 'Action', year: 2002, rating: 7.9, description: 'A man with amnesia discovers he is a trained assassin.', poster: 'https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
    {id: 132, title: 'Die Hard', genre: 'Action', year: 1988, rating: 8.2, description: 'A New York cop battles terrorists.', poster: 'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgwNWMtYTBmNTUyNDUzODVjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 133, title: 'Lethal Weapon', genre: 'Action', year: 1987, rating: 7.6, description: 'Two mismatched cops are paired together.', poster: 'https://m.media-amazon.com/images/M/MV5BZDllNWE0NGEtZjlhOC00NWE0LTg2ODEtNmQ5YzVhYjU3MzVkXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg'},
    {id: 134, title: 'Speed', genre: 'Action', year: 1994, rating: 7.3, description: 'A bus is rigged to explode if it goes under 50 mph.', poster: 'https://m.media-amazon.com/images/M/MV5BYjc0MjYyNDEtZGRhMy00NzJiLWI2Y2QtYzhiYTU3NzAxNzg4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {id: 135, title: 'Heat', genre: 'Crime', year: 1995, rating: 8.3, description: 'A group of professional bank robbers.', poster: 'https://m.media-amazon.com/images/M/MV5BNDc0YjdmN2YtNWRmOC00YTI3LWFmNmYtMmVlMjE2YWUxMTQyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 136, title: 'Scarface', genre: 'Crime', year: 1983, rating: 8.3, description: 'A Cuban immigrant becomes a drug lord.', poster: 'https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 137, title: 'Casino', genre: 'Crime', year: 1995, rating: 8.2, description: 'A tale of greed, deception, money, power.', poster: 'https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'},
    {id: 138, title: 'Donnie Brasco', genre: 'Crime', year: 1997, rating: 7.7, description: 'An FBI undercover agent infiltrates the mob.', poster: 'https://m.media-amazon.com/images/M/MV5BNThiYjM2YzQtZDE5OS00YjI0LWE4Y2UtMTY4OGQ5NmY1NmM2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 139, title: 'L.A. Confidential', genre: 'Crime', year: 1997, rating: 8.2, description: 'Corruption is rampant in the police force.', poster: 'https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzVkNjE2NTJkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 140, title: 'The Shining', genre: 'Thriller', year: 1980, rating: 8.4, description: 'A family heads to an isolated hotel.', poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {id: 141, title: 'Jaws', genre: 'Thriller', year: 1975, rating: 8.1, description: 'A giant shark terrorizes a beach town.', poster: 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},
    {id: 142, title: 'The Exorcist', genre: 'Thriller', year: 1973, rating: 8.1, description: 'A young girl is possessed by a demon.', poster: 'https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTdmYjZiODE2ZGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 143, title: 'Alien', genre: 'Sci-Fi', year: 1979, rating: 8.5, description: 'The crew encounters a deadly lifeform.', poster: 'https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'},
    {id: 144, title: 'Aliens', genre: 'Sci-Fi', year: 1986, rating: 8.4, description: 'The sole survivor returns to the planet.', poster: 'https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 145, title: 'E.T. the Extra-Terrestrial', genre: 'Sci-Fi', year: 1982, rating: 7.9, description: 'A troubled child befriends an alien.', poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {id: 146, title: 'Close Encounters of the Third Kind', genre: 'Sci-Fi', year: 1977, rating: 7.6, description: 'A man becomes obsessed with UFOs.', poster: 'https://m.media-amazon.com/images/M/MV5BMjM4NDAyNTUwOF5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'},
    {id: 147, title: '2001: A Space Odyssey', genre: 'Sci-Fi', year: 1968, rating: 8.3, description: 'Humanity finds a mysterious object.', poster: 'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 148, title: 'Blade Runner', genre: 'Sci-Fi', year: 1982, rating: 8.1, description: 'A blade runner must pursue replicants.', poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
    {id: 149, title: 'The Thing', genre: 'Sci-Fi', year: 1982, rating: 8.2, description: 'A research team encounters an alien.', poster: 'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'},
    {id: 150, title: 'Predator', genre: 'Sci-Fi', year: 1987, rating: 7.8, description: 'A team is hunted by an alien predator.', poster: 'https://m.media-amazon.com/images/M/MV5BY2QwYmFmZTEtNzY2Mi00M2U4LWI4NjUtNzA5ZDI5NzVjNzNhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
    {id: 151, title: 'Scream VI', genre: 'Thriller', year: 2023, rating: 6.5, description: 'The survivors move to New York City.', poster: 'https://image.tmdb.org/t/p/w300/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg'},
    {id: 152, title: 'John Wick: Chapter 4', genre: 'Action', year: 2023, rating: 7.7, description: 'John Wick uncovers a path to defeating The High Table.', poster: 'https://image.tmdb.org/t/p/w300/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg'},
    {id: 153, title: 'Fast X', genre: 'Action', year: 2023, rating: 5.8, description: 'Dom must confront the sins of his past.', poster: 'https://image.tmdb.org/t/p/w300/fiVW06jE7z9YnO4trhaMEdclSiC.jpg'},
    {id: 154, title: 'Guardians of the Galaxy Vol. 3', genre: 'Action', year: 2023, rating: 7.9, description: 'The team faces their most dangerous mission.', poster: 'https://image.tmdb.org/t/p/w300/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg'},
    {id: 155, title: 'Spider-Man: Across the Spider-Verse', genre: 'Action', year: 2023, rating: 8.7, description: 'Miles Morales catapults across the Multiverse.', poster: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'},
    {id: 156, title: 'The Super Mario Bros. Movie', genre: 'Comedy', year: 2023, rating: 7.0, description: 'Mario and Luigi are transported to the Mushroom Kingdom.', poster: 'https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mTahaiK0.jpg'},
    {id: 157, title: 'Indiana Jones 5', genre: 'Action', year: 2023, rating: 6.5, description: 'Indy faces retirement and a new adventure.', poster: 'https://image.tmdb.org/t/p/w300/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg'},
    {id: 158, title: 'Transformers: Rise of the Beasts', genre: 'Action', year: 2023, rating: 6.0, description: 'Optimus Prime and the Autobots take on their biggest threat.', poster: 'https://image.tmdb.org/t/p/w300/gPbM0MK8CP8A174rmUwGsADNYKD.jpg'},
    {id: 159, title: 'The Flash', genre: 'Action', year: 2023, rating: 6.7, description: 'Barry Allen uses his super speed to change the past.', poster: 'https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg'},
    {id: 160, title: 'Ant-Man and the Wasp: Quantumania', genre: 'Action', year: 2023, rating: 6.1, description: 'The family finds themselves exploring the Quantum Realm.', poster: 'https://image.tmdb.org/t/p/w300/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg'},
    {id: 161, title: 'Cocaine Bear', genre: 'Comedy', year: 2023, rating: 5.9, description: 'A bear ingests cocaine and goes on a rampage.', poster: 'https://image.tmdb.org/t/p/w300/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg'},
    {id: 162, title: 'M3GAN', genre: 'Thriller', year: 2023, rating: 6.3, description: 'A lifelike doll becomes sentient.', poster: 'https://image.tmdb.org/t/p/w300/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg'},
    {id: 163, title: 'Avatar: The Way of Water', genre: 'Sci-Fi', year: 2022, rating: 7.6, description: 'Jake Sully lives with his newfound family.', poster: 'https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'},
    {id: 164, title: 'Black Adam', genre: 'Action', year: 2022, rating: 6.2, description: 'An ancient superhero is awakened.', poster: 'https://image.tmdb.org/t/p/w300/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg'},
    {id: 165, title: 'Wakanda Forever', genre: 'Action', year: 2022, rating: 6.7, description: 'The people of Wakanda fight to protect their home.', poster: 'https://image.tmdb.org/t/p/w300/sv1xJUazXeYqALzczSZ3O6nkH75.jpg'},
    {id: 166, title: 'Thor: Love and Thunder', genre: 'Action', year: 2022, rating: 6.2, description: 'Thor enlists the help of Valkyrie and Korg.', poster: 'https://image.tmdb.org/t/p/w300/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg'},
    {id: 167, title: 'Minions: The Rise of Gru', genre: 'Comedy', year: 2022, rating: 6.5, description: 'Young Gru plots his first scheme.', poster: 'https://image.tmdb.org/t/p/w300/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg'},
    {id: 168, title: 'Lightyear', genre: 'Comedy', year: 2022, rating: 6.1, description: 'The origin story of Buzz Lightyear.', poster: 'https://image.tmdb.org/t/p/w300/ox4goZd956BxqJH6iLwhWPL9ct4.jpg'},
    {id: 169, title: 'Nope', genre: 'Thriller', year: 2022, rating: 6.8, description: 'Residents attempt to capture evidence of a UFO.', poster: 'https://image.tmdb.org/t/p/w300/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg'},
    {id: 170, title: 'Bullet Train', genre: 'Action', year: 2022, rating: 7.3, description: 'Five assassins find themselves on a fast moving bullet train.', poster: 'https://image.tmdb.org/t/p/w300/j8szC8OgrejDQjjMKSVXyaAjw3V.jpg'},
    {id: 171, title: 'The Northman', genre: 'Action', year: 2022, rating: 7.0, description: 'A Viking prince seeks revenge for his father\'s murder.', poster: 'https://image.tmdb.org/t/p/w300/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg'},
    {id: 172, title: 'Morbius', genre: 'Action', year: 2022, rating: 5.2, description: 'A biochemist tries to cure himself of a blood disease.', poster: 'https://image.tmdb.org/t/p/w300/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg'},
    {id: 173, title: 'The Unbearable Weight of Massive Talent', genre: 'Comedy', year: 2022, rating: 7.0, description: 'Nicolas Cage stars as himself.', poster: 'https://image.tmdb.org/t/p/w300/aqhLeieyTpTUKPOfZ3jzo2La0Mq.jpg'},
    {id: 174, title: 'Sonic the Hedgehog 2', genre: 'Comedy', year: 2022, rating: 6.5, description: 'Sonic and Tails face Dr. Robotnik and Knuckles.', poster: 'https://image.tmdb.org/t/p/w300/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg'},
    {id: 175, title: 'Turning Red', genre: 'Comedy', year: 2022, rating: 7.0, description: 'A girl turns into a giant red panda.', poster: 'https://image.tmdb.org/t/p/w300/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg'}
];

// Save movies to localStorage
function saveMovies() {
    localStorage.setItem('movies', JSON.stringify(SAMPLE_MOVIES));
}

// Add industry tags to all movies
const bollywoodMovies = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 101, 102, 103, 104, 105, 106, 107, 108];
SAMPLE_MOVIES.forEach(movie => {
    if (bollywoodMovies.includes(movie.id)) {
        movie.industry = 'Bollywood';
    } else {
        movie.industry = 'Hollywood';
    }
});

// Always save the current movies to localStorage
saveMovies();
console.log('Total movies loaded:', SAMPLE_MOVIES.length);

// Force refresh current view
function refreshCurrentView() {
    if (typeof currentView !== 'undefined') {
        if (currentView === 'home') showHome();
        else if (currentView === 'toprated') showTopRated();
        else if (currentView === 'trending') showTrending();
        else if (currentView === 'smart') showSmartRecommendations();
        else if (currentView === 'watchlist') showWatchlist();
    } else {
        getRecommendations();
    }
}

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

let currentView = 'home';

function renderMovies(movies) {
    const moviesGrid = document.getElementById('moviesGrid');
    
    if (movies.length === 0) {
        const message = currentView === 'watchlist' ? 'Your watchlist is empty. Add some movies!' : 'No movies found.';
        moviesGrid.innerHTML = `<p style="text-align: center; color: #f5c518;">${message}</p>`;
        return;
    }
    
    const isWatchlistView = currentView === 'watchlist';
    const user = JSON.parse(localStorage.getItem('user'));
    const watchlist = user ? JSON.parse(localStorage.getItem('watchlist_' + user.id) || '[]') : [];
    
    moviesGrid.innerHTML = movies.map(movie => {
        const isInWatchlist = watchlist.includes(movie.title);
        
        let buttonHtml;
        if (isWatchlistView) {
            buttonHtml = `<button class="watch-btn" style="background: linear-gradient(45deg, #ff4757, #ff3742);" onclick="removeFromWatchlist('${movie.title}')">Remove</button>`;
        } else if (isInWatchlist) {
            buttonHtml = `<button class="watch-btn" style="background: #4CAF50; cursor: default;">Added ✓</button>`;
        } else {
            buttonHtml = `<button class="watch-btn" onclick="addToWatchlist('${movie.title}')">Add to Watchlist</button>`;
        }
        
        return `
            <div class="movie-card">
                <div class="movie-poster">
                    ${movie.poster ? `<img src="${movie.poster}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover;">` : getMovieEmoji(movie.genre)}
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-year">${movie.year}</div>
                    <div class="movie-genre">${movie.genre}</div>
                    <div class="rating">
                        <span class="stars">${createStars(movie.rating)}</span>
                        <span class="rating-score">${movie.rating}/10</span>
                    </div>
                    ${buttonHtml}
                </div>
            </div>
        `;
    }).join('');
}

async function addToWatchlist(movieTitle) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        alert('Please login to add movies to your watchlist');
        return;
    }
    
    const watchlistKey = 'watchlist_' + user.id;
    let watchlist = JSON.parse(localStorage.getItem(watchlistKey) || '[]');
    
    if (!watchlist.includes(movieTitle)) {
        watchlist.push(movieTitle);
        localStorage.setItem(watchlistKey, JSON.stringify(watchlist));
    }
    
    const btn = event.target;
    btn.textContent = 'Added! ✓';
    btn.style.background = '#4CAF50';
    btn.style.cursor = 'default';
    btn.onclick = null; // Disable further clicks
}

function removeFromWatchlist(movieTitle) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        alert('Please login to manage your watchlist');
        return;
    }
    
    const watchlistKey = 'watchlist_' + user.id;
    let watchlist = JSON.parse(localStorage.getItem(watchlistKey) || '[]');
    
    watchlist = watchlist.filter(title => title !== movieTitle);
    localStorage.setItem(watchlistKey, JSON.stringify(watchlist));
    
    // Refresh the watchlist view
    showWatchlist();
}

async function searchMovies() {
    const query = document.getElementById('searchInput').value;
    if (!query) {
        getRecommendations();
        return;
    }
    
    const searchResults = SAMPLE_MOVIES.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
    );
    renderMovies(searchResults);
}

async function getRecommendations() {
    renderMovies(SAMPLE_MOVIES.sort((a, b) => b.rating - a.rating));
}

async function filterByGenre(genre) {
    let moviesToFilter = SAMPLE_MOVIES;
    
    // If in watchlist view, only filter from watchlist movies
    if (currentView === 'watchlist') {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            renderMovies([]);
            return;
        }
        const watchlist = JSON.parse(localStorage.getItem('watchlist_' + user.id) || '[]');
        moviesToFilter = SAMPLE_MOVIES.filter(movie => watchlist.includes(movie.title));
    } else if (currentView === 'smart') {
        return; // Smart recommendations handles its own filtering
    } else if (currentView === 'toprated') {
        moviesToFilter = SAMPLE_MOVIES.sort((a, b) => b.rating - a.rating);
    } else if (currentView === 'trending') {
        moviesToFilter = SAMPLE_MOVIES.filter(movie => movie.year >= 2015).sort((a, b) => b.year - a.year);
    }
    
    if (genre === 'all') {
        renderMovies(moviesToFilter);
    } else {
        const filteredMovies = moviesToFilter.filter(movie => 
            movie.genre.toLowerCase() === genre.toLowerCase()
        );
        renderMovies(filteredMovies);
    }
}

// Filter functionality
document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('filter-btn')) {
        const btn = e.target;
        
        // Handle industry filters
        if (btn.dataset.industry) {
            document.querySelectorAll('[data-industry]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByIndustry(btn.dataset.industry);
        }
        
        // Handle genre filters
        if (btn.dataset.genre) {
            document.querySelectorAll('[data-genre]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByGenre(btn.dataset.genre);
        }
    }
});

function filterByIndustry(industry) {
    let moviesToFilter = SAMPLE_MOVIES;
    
    if (currentView === 'watchlist') {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            renderMovies([]);
            return;
        }
        const watchlist = JSON.parse(localStorage.getItem('watchlist_' + user.id) || '[]');
        moviesToFilter = SAMPLE_MOVIES.filter(movie => watchlist.includes(movie.title));
    } else if (currentView === 'smart') {
        return;
    } else if (currentView === 'toprated') {
        moviesToFilter = [...SAMPLE_MOVIES].sort((a, b) => b.rating - a.rating);
    } else if (currentView === 'trending') {
        moviesToFilter = SAMPLE_MOVIES.filter(movie => movie.year >= 2015).sort((a, b) => b.year - a.year);
    }
    
    if (industry === 'all') {
        renderMovies(moviesToFilter);
    } else {
        const filteredMovies = moviesToFilter.filter(movie => 
            movie.industry && movie.industry.toLowerCase() === industry.toLowerCase()
        );
        renderMovies(filteredMovies);
    }
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 2 || searchTerm.length === 0) {
        searchMovies();
    }
});

// User authentication functions
function checkUserAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userSection = document.getElementById('userSection');
    
    if (user) {
        const adminLink = user.isAdmin ? '<a href="admin.html" class="nav-link">Admin Dashboard</a>' : '';
        userSection.innerHTML = `
            <span class="nav-link">Welcome, ${user.username}!</span>
            ${adminLink}
            <a href="#" class="nav-link" onclick="logout()">Logout</a>
        `;
    } else {
        userSection.innerHTML = `
            <a href="auth.html" class="nav-link">Login</a>
        `;
    }
}

function logout() {
    localStorage.removeItem('user');
    checkUserAuth();
    alert('Logged out successfully!');
}

async function loadUserPreferences() {
    getRecommendations();
}

// Navigation tab functionality
function showHome() {
    currentView = 'home';
    document.querySelector('.section-title').textContent = 'Recommended For You';
    getRecommendations();
    resetFilters();
    setActiveTab('homeTab');
}

function showTopRated() {
    currentView = 'toprated';
    document.querySelector('.section-title').textContent = 'Top Rated Movies';
    const topRated = SAMPLE_MOVIES.sort((a, b) => b.rating - a.rating);
    renderMovies(topRated);
    resetFilters();
    setActiveTab('topRatedTab');
}

function resetFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-genre="all"]').classList.add('active');
    document.querySelector('.filter-btn[data-industry="all"]').classList.add('active');
}

function showTrending() {
    currentView = 'trending';
    document.querySelector('.section-title').textContent = 'Trending Movies';
    const trending = SAMPLE_MOVIES.filter(movie => movie.year >= 2015).sort((a, b) => b.year - a.year);
    renderMovies(trending);
    resetFilters();
    setActiveTab('trendingTab');
}

function showSmartRecommendations() {
    currentView = 'smart';
    document.querySelector('.section-title').textContent = '🤖 AI Smart Recommendations';
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
        const moviesGrid = document.getElementById('moviesGrid');
        moviesGrid.innerHTML = `
            <div style="text-align: center; color: #f5c518; padding: 2rem;">
                <h3>🤖 AI Agent Ready!</h3>
                <p>Please login to get personalized movie recommendations based on your preferences and watch history.</p>
                <a href="auth.html" style="color: #f5c518; text-decoration: underline;">Login Here</a>
            </div>
        `;
        resetFilters();
        setActiveTab('smartTab');
        return;
    }
    
    generateSmartRecommendations(user);
    resetFilters();
    setActiveTab('smartTab');
}

function generateSmartRecommendations(user) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist_' + user.id) || '[]');
    const watchedMovies = SAMPLE_MOVIES.filter(movie => watchlist.includes(movie.title));
    
    if (watchedMovies.length === 0) {
        const moviesGrid = document.getElementById('moviesGrid');
        moviesGrid.innerHTML = `
            <div style="text-align: center; color: #f5c518; padding: 2rem;">
                <h3>🤖 Building Your Profile...</h3>
                <p>Add some movies to your watchlist first, and I'll analyze your preferences to suggest perfect matches!</p>
                <p style="margin-top: 1rem; opacity: 0.8;">The more movies you add, the smarter my recommendations become.</p>
            </div>
        `;
        return;
    }
    
    // AI Analysis
    const genrePreferences = {};
    const yearPreferences = {};
    let totalRating = 0;
    
    watchedMovies.forEach(movie => {
        genrePreferences[movie.genre] = (genrePreferences[movie.genre] || 0) + 1;
        const decade = Math.floor(movie.year / 10) * 10;
        yearPreferences[decade] = (yearPreferences[decade] || 0) + 1;
        totalRating += movie.rating;
    });
    
    const avgRating = totalRating / watchedMovies.length;
    const topGenre = Object.keys(genrePreferences).reduce((a, b) => genrePreferences[a] > genrePreferences[b] ? a : b);
    const topDecade = Object.keys(yearPreferences).reduce((a, b) => yearPreferences[a] > yearPreferences[b] ? a : b);
    
    // Generate recommendations
    const recommendations = SAMPLE_MOVIES.filter(movie => {
        if (watchlist.includes(movie.title)) return false;
        
        let score = 0;
        if (movie.genre === topGenre) score += 3;
        if (Math.floor(movie.year / 10) * 10 == topDecade) score += 2;
        if (movie.rating >= avgRating) score += 1;
        
        return score >= 2;
    }).sort((a, b) => b.rating - a.rating).slice(0, 8);
    
    // Display AI analysis and recommendations
    const moviesGrid = document.getElementById('moviesGrid');
    const analysisHtml = `
        <div style="background: rgba(245, 197, 24, 0.1); border: 1px solid #f5c518; border-radius: 10px; padding: 1.5rem; margin-bottom: 2rem; text-align: center;">
            <h3 style="color: #f5c518; margin-bottom: 1rem;">🧠 AI Analysis Complete</h3>
            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 1rem;">
                <div><strong>Favorite Genre:</strong> ${topGenre}</div>
                <div><strong>Preferred Era:</strong> ${topDecade}s</div>
                <div><strong>Rating Preference:</strong> ${avgRating.toFixed(1)}+</div>
                <div><strong>Movies Analyzed:</strong> ${watchedMovies.length}</div>
            </div>
            <p style="margin-top: 1rem; opacity: 0.9;">Based on your watch history, here are my top picks for you:</p>
        </div>
    `;
    
    if (recommendations.length === 0) {
        moviesGrid.innerHTML = analysisHtml + `
            <div style="text-align: center; color: #f5c518; padding: 2rem;">
                <h3>🎯 You've Got Great Taste!</h3>
                <p>You've already discovered most movies that match your preferences. Try exploring different genres!</p>
            </div>
        `;
    } else {
        moviesGrid.innerHTML = analysisHtml + recommendations.map(movie => {
            const isInWatchlist = watchlist.includes(movie.title);
            const buttonHtml = isInWatchlist ? 
                `<button class="watch-btn" style="background: #4CAF50; cursor: default;">Added ✓</button>` :
                `<button class="watch-btn" onclick="addToWatchlist('${movie.title}')">Add to Watchlist</button>`;
            
            return `
                <div class="movie-card" style="border: 2px solid #f5c518; box-shadow: 0 0 20px rgba(245, 197, 24, 0.3);">
                    <div class="movie-poster">
                        ${movie.poster ? `<img src="${movie.poster}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover;">` : getMovieEmoji(movie.genre)}
                        <div style="position: absolute; top: 10px; right: 10px; background: #f5c518; color: #000; padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: bold;">AI Pick</div>
                    </div>
                    <div class="movie-info">
                        <h3 class="movie-title">${movie.title}</h3>
                        <div class="movie-year">${movie.year}</div>
                        <div class="movie-genre">${movie.genre} • ${movie.industry || 'Hollywood'}</div>
                        <div class="rating">
                            <span class="stars">${createStars(movie.rating)}</span>
                            <span class="rating-score">${movie.rating}/10</span>
                        </div>
                        ${buttonHtml}
                    </div>
                </div>
            `;
        }).join('');
    }
}

function showWatchlist() {
    currentView = 'watchlist';
    document.querySelector('.section-title').textContent = 'My Watchlist';
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        renderMovies([]);
        resetFilters();
        return;
    }
    
    const watchlist = JSON.parse(localStorage.getItem('watchlist_' + user.id) || '[]');
    const watchlistMovies = SAMPLE_MOVIES.filter(movie => watchlist.includes(movie.title));
    renderMovies(watchlistMovies);
    resetFilters();
    setActiveTab('watchlistTab');
}

function setActiveTab(activeTabId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.id && link.id.includes('Tab')) {
            link.style.color = '#ffffff';
        }
    });
    document.getElementById(activeTabId).style.color = '#f5c518';
}

// Add event listeners for tabs
document.getElementById('homeTab').addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
});

document.getElementById('topRatedTab').addEventListener('click', (e) => {
    e.preventDefault();
    showTopRated();
});

document.getElementById('trendingTab').addEventListener('click', (e) => {
    e.preventDefault();
    showTrending();
});

document.getElementById('smartTab').addEventListener('click', (e) => {
    e.preventDefault();
    showSmartRecommendations();
});

document.getElementById('watchlistTab').addEventListener('click', (e) => {
    e.preventDefault();
    showWatchlist();
});

// Initialize the page
window.onload = function() {
    checkUserAuth();
    loadUserPreferences();
    setActiveTab('homeTab');
};

// Listen for storage changes to sync between tabs
window.addEventListener('storage', function(e) {
    if (e.key === 'movies') {
        console.log('Storage change detected');
        reloadMovies();
        refreshCurrentView();
    }
});

// Also check for changes periodically (fallback)
setInterval(function() {
    const stored = localStorage.getItem('movies');
    if (stored) {
        const storedMovies = JSON.parse(stored);
        if (storedMovies.length !== SAMPLE_MOVIES.length) {
            console.log('Movie count changed, reloading...');
            reloadMovies();
            refreshCurrentView();
        }
    }
}, 2000);