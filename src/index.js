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

const sendCommentsToApi = ({
  type, body,
}) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OXo5yjOzhiKMHZxhZ4kt/comments';
  fetch(url, {
    method: type,
    body,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });
};

const reciveCommentsApi = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OXo5yjOzhiKMHZxhZ4kt/comments?item_id=${id}`;
  const myRequest = new Request(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    mode: 'cors',
    cache: 'default',
  });
  const data = await fetch(myRequest);
  return data;
};

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
      reserveBtn[index].addEventListener('click', (e) => {
        e.preventDefault();
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
        const comments = document.querySelector('.comment');
        close.addEventListener('click', () => {
          document.querySelector('.modal').style.display = 'none';
          modal.innerHTML = '';
        });
        const displayComments = (el) => {
          const ul = document.querySelector('.comments-list');
          const li = document.createElement('li');
          li.textContent = `${el.creation_date}  ${el.username} : ${el.comment}`;
          ul.appendChild(li);
        };
        const commentCounter = document.querySelector('h6 span.counter');
        comments.addEventListener('click', () => {
          const username = document.querySelector('.Name').value;
          const comment = document.querySelector('.insights').value;
          const d = new Date();
          // eslint-disable-next-line camelcase
          const creation_date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
          if (username && comment) {
            const el = { creation_date, username, comment };
            const MovieId = movie.id;
            const body = JSON.stringify({
              item_id: MovieId,
              username,
              comment,
            });
            commentCounter.innerHTML = `${Number(commentCounter.textContent) + 1}`;
            const type = 'POST';
            const obj = { type, body };
            sendCommentsToApi(obj);
            displayComments(el);
            document.querySelector('.Name').value = '';
            document.querySelector('.insights').value = '';
          }
        });

        reciveCommentsApi(movie.id).then((element) => (element.json()))
          .then((json) => {
            const commentsArray = json;
            commentCounter.textContent = commentsArray.length;
            console.log(commentCounter);
            console.log(commentsArray.length);
            commentsArray.forEach((element) => {
              displayComments(element);
            });
          });
      });
    });
  });
}

setTimeout(display, 2000);
renderMovies();