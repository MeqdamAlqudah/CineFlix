/* eslint-disable camelcase */
import './main.scss';
import 'bootstrap';
import {
  getData, reciveCommentsApi, sendCommentsToApi, getInvolvement,
} from './app/api.js';
import displayPopup from './app/popup.js';
import cards from './app/cards.js';
import { displayLikes, addLike } from './app/utils.js';
import reservation from './reservation.js';
import { postReservation, getReservation } from './involvementApi.js';
import displayCommentData from './app/comment.js';
import counter from './counter.js';
import moviesCount from './app/Itemscounter.js';
import reservationCount from './reservationCounter.js';

const movieList = document.getElementById('movie-list');
const moviesCounter = document.getElementById('movies-counter');
const modalReserve = document.getElementById('modal-reservation');

const renderMovies = () => {
  getData().then((movies) => {
    moviesCount(movies, moviesCounter);
    movies.forEach((movie, index) => {
      movieList.innerHTML += cards(movie, index); // render the cards
    });
    const spans = movieList.querySelectorAll('.spn-like');
    getInvolvement('likes').then((data) => {
      displayLikes(spans, data);
    });
  });
};
renderMovies();
// Display Likes
function addLikes() {
  const parent = document.getElementById('movie-list');
  const spans = parent.querySelectorAll('.spn-like');
  getInvolvement('likes').then((data) => {
    displayLikes(spans, data);
  });
}
// Add Likes
(function likeEvent() {
  const selector = '.btn-like';
  document.addEventListener('click', (e) => {
    const element = e.target;
    if (!element.matches(selector)) {
      return 0;
    }
    const cardId = e.target.parentElement.id;
    const like = { item_id: cardId };
    addLike(like);
    setTimeout(addLikes, 800);
    e.target.style = 'visibility: hidden';
    const loader = () => {
      e.target.style = 'visibility: visible';
    };
    setTimeout(loader, 1000);
    return 1;
  });
}());

const reservationPopup = () => {
  getData().then((movies) => {
    movies.forEach((movie, index) => {
      const reserveBtn = document.querySelectorAll('.reservation-btn');
      reserveBtn[index].addEventListener('click', (e) => {
        e.preventDefault();
        modalReserve.innerHTML = reservation(movie);
        const modal = document.querySelector('.modal-reservation');
        modal.style.display = 'block';
        const close = document.querySelector('.reservation-close');
        close.addEventListener('click', () => {
          modal.style.display = 'none';
        });
        const ulList = document.querySelector('.reservation-list');
        const btnSubmit = document.querySelector('.reservation-submit');
        const displayReservation = (list) => {
          list.forEach((item) => {
            ulList.innerHTML += `<li>${item.date_start} - ${item.date_end} by ${item.username} </li>`;
          });
        };
        const item_id = movie.id;
        getReservation(item_id).then((data) => {
          const reservationCnt = document.querySelector('.count-reservation');
          displayReservation(data);
          reservationCnt.innerHTML = `Reservations(${reservationCount(data)})`;
        });
        btnSubmit.addEventListener('click', async (e) => {
          e.preventDefault();
          const username = document.querySelector('.name').value;
          const date_start = document.querySelector('.start-date').value;
          const date_end = document.querySelector('.end-date').value;
          if (username && date_start) {
            const data = {
              item_id, username, date_start, date_end,
            };
            await postReservation(data);
            await getReservation(item_id).then((data) => {
              const reservationCnt = document.querySelector('.count-reservation');
              ulList.innerHTML = '';
              displayReservation(data);
              reservationCnt.innerHTML = '';

              reservationCnt.innerHTML = `Reservations(${reservationCount(data)})`;
            });
          }
        });
      });
    });
  });
};
setTimeout(reservationPopup, 2000);

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
