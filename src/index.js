import './main.scss';
import 'bootstrap';
import getData from './app/api.js';
import cards from './app/cards.js';
import reservation from './reservation.js';
// import reservation from './reservation.js';

const movieList = document.getElementById('movie-list');
const moviesCounter = document.getElementById('movies-counter');
// const reserveBtn = document.querySelectorAll('.btn');
const modalReserve = document.getElementById('modal-reservation');

const moviesCount = (movies) => {
  moviesCounter.innerText = movies.length;
};
const renderMovies = () => {
  getData().then((movies) => {
    moviesCount(movies);
    movies.forEach((movie) => {
      movieList.innerHTML += cards(movie);
      // renders the cards
    });
  });
};

const reservationPopup = () => {
  getData().then((movies) => {
    movies.forEach((movie, index) => {
      const reserveBtn = document.querySelectorAll('.btn.btn-warning');
      reserveBtn[index].addEventListener('click', () => {
        modalReserve.innerHTML = reservation(movie);
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
        const close = document.querySelector('.btn.btn-secondary');
        close.addEventListener('click', () => {
          modal.style.display = 'none';
        });
      });
    });
  });
};

setTimeout(reservationPopup, 2000);
renderMovies();
