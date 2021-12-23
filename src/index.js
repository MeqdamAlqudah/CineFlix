import './main.scss';
import 'bootstrap';
import getData, { reciveCommentsApi, sendCommentsToApi } from './app/api.js';
import displayPopup from './app/popup.js';
import cards from './app/cards.js';
import displayCommentData from './app/comment.js';
import counter from './counter.js';

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

function display() {
  getData().then((movies) => {
    movies.forEach((movie, index) => {
      const commentButton = document.querySelectorAll('.btn.btn-dark')[index];
      const modal = document.querySelector('.modal-dialog');
      commentButton.addEventListener('click', () => {
        modal.innerHTML += displayPopup(movie);
        document.querySelector('.modal').style.display = 'block';
        const close = document.querySelector('.btn-close');
        close.addEventListener('click', () => {
          document.querySelector('.modal').style.display = 'none';
          modal.innerHTML = '';
        });
        displayCommentData(movie, reciveCommentsApi, sendCommentsToApi, counter);
      });
    });
  });
}

setTimeout(display, 2000);
renderMovies();