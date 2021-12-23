import './main.scss';
import 'bootstrap';
import getData from './app/api.js';
import displayPopup from './app/popup.js';
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

function display() {
  getData().then((movies) => {
    movies.forEach((movie, index) => {
      const commentButton = document.querySelectorAll('.btn.btn-dark')[index];
      const modal = document.querySelector('.modal-dialog');
      commentButton.addEventListener('click', () => {
        modal.innerHTML += displayPopup(movie);
        document.querySelector('.modal').style.display = 'block';
        const close = document.querySelector('.btn-close');
        const comment = document.querySelector('.comment');
        close.addEventListener('click', () => {
          document.querySelector('.modal').style.display = 'none';
          modal.innerHTML = '';
        });
        const commentsArray = JSON.parse(localStorage.getItem('commentsArray') || '[]');
        const displayComments = (el) => {
          const ul = document.querySelector('.comments-list');
          const li = document.createElement('li');

          li.textContent = `${el.date} ${el.name} ${el.insight}`;
          ul.appendChild(li);
        };
        comment.addEventListener('click', () => {
          const name = document.querySelector('.Name').value;
          const insight = document.querySelector('.insights').value;
          const d = new Date();
          const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
          if (name && insight) {
            const el = { date, name, insight };
            commentsArray.push(el);
            localStorage.setItem('commentsArray', JSON.stringify(commentsArray));
            displayComments(el);
          }
        });
        commentsArray.forEach((element) => {
          displayComments(element);
        });
      });
    });
  });
}

setTimeout(display, 2000);
renderMovies();