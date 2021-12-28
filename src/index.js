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
    movies.forEach((movie) => {
      movieList.innerHTML += cards(movie); // render the cards
    });
    const spans = movieList.querySelectorAll('.spn-like');
    getInvolvement('likes').then((data) => {
      displayLikes(movies, spans, data);
    });
  });
};
renderMovies();
// Display Likes
async function addLikes() {
  const likeApi = await getInvolvement('likes');
  const movieApi = await getData();
  const parent = document.getElementById('movie-list');
  const spans = parent.querySelectorAll('.spn-like');
  displayLikes(movieApi, spans, likeApi);
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
            ulList.innerHTML += `<li><p class = "date-start">${item.date_start}</p>   -    <p class = "date-end">${item.date_end}</p>    by   ${item.username} </li>`;
          });
        };
        const findDate = (dateStart, dateEnd) => {
          const oldDataStart = document.querySelectorAll('.date-start');
          const oldData_end = document.querySelectorAll('.date-end');
          for (let i = 0; i < oldDataStart.length; i += 1) {
            if ((oldDataStart[i].textContent === dateStart)
              && (oldData_end[i].textContent === dateEnd)) {
              return true;
            }
          }
          return false;
        };
        const item_id = movie.id;
        getReservation(item_id).then((data) => {
          const reservationCnt = document.querySelector('.count-reservation');
          displayReservation(data);
          reservationCnt.innerHTML = `Reservations(${reservationCount(data)})`;
        });
        btnSubmit.addEventListener('click', async (e) => {
          const username = document.querySelector('.name').value;
          const date_start = document.querySelector('.start-date').value;
          const date_end = document.querySelector('.end-date').value;
          const errorElement = document.querySelector('.error-reservation');

          if (!(username && date_start && date_end)) {
            e.preventDefault();
            errorElement.innerText = 'Please enter your name and your reservation date ';
          } else if (date_start === date_end) {
            e.preventDefault();
            errorElement.innerText = 'Please enter different start and end dates';
          } else if (findDate(date_start, date_end)) {
            e.preventDefault();
            errorElement.innerText = 'this date is reserve';
          } else if ((new Date(date_start).getTime() > new Date(date_end).getTime())) {
            e.preventDefault();
            errorElement.innerText = 'End date can\'t be before the start date';
          } else {
            errorElement.innerText = '';
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
        const close = document.querySelector('.btn-close');
        close.addEventListener('click', () => {
          modal.innerHTML = '';
        });
        displayCommentData(movie, reciveCommentsApi, sendCommentsToApi, counter);
      });
    });
  });
}

display();