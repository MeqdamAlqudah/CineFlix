import './main.scss';
import 'bootstrap';
import getData from './app/api.js';
import displayPopup from './app/popup';

const movieList = document.getElementById('movie-list');

const renderMovies = () => {
  getData().then((movies) => {
    movies.forEach((movie) => {
      movieList.innerHTML += `
<div class="card p-0" style="width: 18rem;">
  <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Card image cap">
  <div class="card-body">
  <div class="h-25 w-100">
    <h5 class="h6">${movie.title}</h5>
  </div>
  <div class="h-25 w-100 d-flex flex-column align-items-end"> 
    <a class="btn-like"></a>
    <span>5 Likes</span>
  </div>  
  <div class="h-50 d-flex flex-column gap-2">
    <a href="#" class="btn btn-dark">Comments</a>
    <a href="#" class="btn btn-warning">Rezervations</a>
  </div>  
  </div>
</div> `;
    });
  });
};
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