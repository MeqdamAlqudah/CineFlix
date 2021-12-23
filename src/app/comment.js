const displayCommentData = (movie, reciveCommentsApi, sendCommentsToApi, counter) => {
  console.log(movie);
  const comments = document.querySelector('.comment');
  const displayComments = (el) => {
    const ul = document.querySelector('.comments-list');
    const li = document.createElement('li');
    li.textContent = `${el.creation_date}  ${el.username} : ${el.comment}`;
    ul.appendChild(li);
  };
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
      const type = 'POST';
      const obj = { type, body };
      sendCommentsToApi(obj);
      counter(reciveCommentsApi, movie).then((json) => {
        const commentCounter = document.querySelector('body h6.count');
        const commentsArray = json;
        commentCounter.innerHTML = `Comments <span class ="counter">${commentsArray.length + 1}<span>`;
        expect(Number(document.querySelector('h6 span.counter').textContent)).toBe(2);
      });
      displayComments(el);
      document.querySelector('.Name').value = '';
      document.querySelector('.insights').value = '';
    }
  });
  counter(reciveCommentsApi, movie).then((json) => {
    const commentCounter = document.querySelector('body h6.count');
    const commentsArray = json;
    commentCounter.innerHTML = `Comments <span class ="counter">${commentsArray.length}<span>`;
  });
  reciveCommentsApi(movie.id).then((element) => (element.json()))
    .then((json) => {
      const commentsArray = json;
      console.log(json);
      commentsArray.forEach((element) => {
        displayComments(element);
      });
    });
};

export default displayCommentData;