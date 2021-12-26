const displayCommentData = (movie, reciveCommentsApi, sendCommentsToApi, counter) => {
  const comments = document.querySelector('.comment');
  const displayComments = (el) => {
    const ul = document.querySelector('.comments-list');
    const li = document.createElement('li');
    const date = `${el.creation_date}`;
    li.textContent = `${date}  ${el.username} : ${el.comment}`;
    ul.appendChild(li);
  };
  comments.addEventListener('click', (e) => {
    const errorElement = document.getElementById('error');
    const username = document.querySelector('.Name').value;
    const comment = document.querySelector('.insights').value;
    if (!username) {
      e.preventDefault();
      errorElement.innerText = 'Please enter your name and comment';
    } else if (username.length > 30) {
      e.preventDefault();
      errorElement.innerText = 'you just allowed to give 40 word length name';
    } else if (comment.length > 100) {
      e.preventDefault();
      errorElement.innerText = 'you just allowed to give 99 word length comment';
    } else {
      errorElement.innerText = '';
      const d = new Date();
      // eslint-disable-next-line camelcase
      const creation_date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;

      // Validate-contact-form function
      if (username && comment) {
        const el = { creation_date, username, comment };
        const MovieId = movie.id;
        const body = JSON.stringify({
          item_id: MovieId,
          username,
          comment,
        });
        const type = 'POST';
        const obj = { type, body };
        sendCommentsToApi(obj);
        counter(reciveCommentsApi, movie).then((json) => {
          const commentCounter = document.querySelector('body h6.count');
          const commentsArray = json;
          commentCounter.innerHTML = `Comments <span class ="counter">${commentsArray.length + 1}<span>`;
        });
        displayComments(el);
        document.querySelector('.Name').value = '';
        document.querySelector('.insights').value = '';
      }
    }
  });
  counter(reciveCommentsApi, movie).then((json) => {
    const commentCounter = document.querySelector('body h6.count');
    const commentsArray = json;
    if (commentsArray.length) {
      commentCounter.innerHTML = `Comments <span class ="counter">${commentsArray.length}<span>`;
    }
  });
  reciveCommentsApi(movie.id).then((element) => (element.json()))
    .then((json) => {
      const commentsArray = json;
      commentsArray.forEach((element) => {
        displayComments(element);
      });
    });
};

export default displayCommentData;