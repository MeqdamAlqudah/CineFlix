import './main.scss';
import 'bootstrap';
import getData from './app/api.js';

const movieList = document.getElementById('movie-list');
const commentsArray = JSON.parse(localStorage.getItem('commentsArray') || '[]');
const displayComments = (el) => {
  const ul = document.querySelector('.comments-list');
  const li = document.createElement('li');

  li.textContent = `${el.date} ${el.name} ${el.insight}`;
  ul.appendChild(li);
};

const displayPopup = (element) => {
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';
  const img = document.createElement('img');
  img.setAttribute('src', `https://image.tmdb.org/t/p/w500${element.poster_path}`);
  img.classList.add('w-50');
  const title = element.original_title;
  const h = document.querySelector('.img-container h5');
  h.textContent = title;
  const recap = document.querySelector('.recap');
  recap.textContent = element.overview;
  const popularity = document.querySelector('#popularity p');
  const language = document.querySelector('#language p');
  const release = document.querySelector('#release-date p');
  const vote = document.querySelector('#vote p');
  popularity.textContent = element.popularity;
  language.textContent = element.original_language;
  release.textContent = element.release_date;
  vote.textContent = element.vote_count;
  const container = document.querySelector('.img-container');
  container.appendChild(img);
  modal.style.backgroundColor = '#0000008a';
  modal.style.backdropFilter = 'blur(3px)';
  const comment = document.querySelector('.comment');
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
  const close = document.querySelector('.btn-close');
  close.addEventListener('click', () => {
    modal.style.display = 'none';
    if (container.contains(img)) {
      container.removeChild(img);
    }
  });
  commentsArray.forEach((element) => {
    displayComments(element);
  });
};

const renderMovies = () => {
  getData().then((movies) => {
    for (let i = 0; i < movies.length; i += 1) {
      const div1 = document.createElement('div');
      div1.classList.add('card');
      div1.classList.add('p-0');
      div1.style.width = '18rem';
      const div2 = document.createElement('div');
      div2.classList.add('card-body');
      const div3 = document.createElement('div');
      div3.classList.add('h-25');
      div3.classList.add('w-100');
      const div4 = document.createElement('div');
      div4.classList.add('h-25');
      div4.classList.add('w-100');
      div4.classList.add('d-flex');
      div4.classList.add('flex-column');
      div4.classList.add('align-items-end');
      const div5 = document.createElement('div');
      div5.classList.add('h-50');
      div5.classList.add('d-flex');
      div5.classList.add('flex-column');
      div5.classList.add('gap-2');
      const img = document.createElement('img');
      img.setAttribute('src', `https://image.tmdb.org/t/p/w500${movies[i].poster_path}`);
      img.setAttribute('alt', 'Card image cap');
      const h5 = document.createElement('h5');
      h5.classList.add('h6');
      const a1 = document.createElement('a');
      a1.classList.add('btn-like');
      const a2 = document.createElement('a');
      a2.classList.add('display-comments');
      a2.classList.add('btn');
      a2.classList.add('btn-dark');
      const a3 = document.createElement('a');
      const span = document.createElement('span');
      span.innerText = '5 Likes';
      a3.classList.add('btn');
      a3.classList.add('btn-warning');
      h5.innerText = movies[i].title;
      div1.appendChild(img);
      div1.appendChild(div2);
      div2.appendChild(div3);
      div3.appendChild(h5);
      a2.innerText = 'Comments';
      a3.innerText = 'Reservations';
      div4.appendChild(a1);
      div4.appendChild(span);
      div5.appendChild(a2);
      div5.appendChild(a3);
      div2.appendChild(div4);
      div2.appendChild(div5);
      movieList.appendChild(div1);
      a2.addEventListener('click', () => {
        displayPopup(movies[i]);
      });
    }
  });
};
renderMovies();
