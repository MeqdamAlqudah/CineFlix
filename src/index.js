import './main.scss';
import 'bootstrap';
import getData from './app/api.js';
import cards from './app/cards.js';

const movieList = document.getElementById('movie-list');
const moviesCounter = document.getElementById('movies-counter');

const renderMovies = () => {
  getData().then((movies) => {
    movies.forEach((movie, index) => {
      let movieCount = 0;
      movieCount += index + 1;
      movieList.innerHTML += cards(movie); // renders the cards
      moviesCounter.innerText = movieCount; // displays the count of cards
    });
  });
};
renderMovies();
