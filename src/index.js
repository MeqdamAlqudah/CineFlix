import './main.scss';
import 'bootstrap';
import getData from './app/api.js';
import cards from './app/cards.js';

const movieList = document.getElementById('movie-list');
const moviesCounter = document.getElementById('movies-counter');

const moviesCount = (movies) => {
  moviesCounter.innerText = movies.length;
};

const renderMovies = () => {
  getData().then((movies) => {
    moviesCount(movies);
    movies.forEach((movie) => {
      movieList.innerHTML += cards(movie); // renders the cards
    });
  });
};

renderMovies();
