import './main.scss';
import 'bootstrap';

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
  // const img = document.createElement('img');
  // img.setAttribute('src', element.backdrop_path);
  // img.classlist.add('w-50');
  // const title = element.original_title;
  // const h = document.querySelector('.modal-header h5');
  // h.textContent = title;
  // const recap = document.querySelector('.modal-header p.recap');
  // recap.textContent = `${element.overview}`;
  // const popularity = document.querySelector('.popularity p');
  // const language = document.querySelector('.language p');
  // const release = document.querySelector('.release-date p');
  // const vote = document.querySelector('.vote p');
  // popularity.textContent = element.popularity;
  // language.textContent = element.original_language;
  // release.textContent = element.release_date;
  // vote.textContent = element.vote_count;
  // const container = document.querySelector('img-container');
  // container.appendChild('img');
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
  commentsArray.forEach((element) => {
    displayComments(element);
  });
};

displayPopup();
