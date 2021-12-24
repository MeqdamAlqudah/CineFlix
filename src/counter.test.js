/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import reciveCommentsApi from './__mocks__/api.js';

import counter from './counter.js';

jest.mock('./app/comment.js');

test('Expect the number of comments equal the value of counter', () => {
  document.body.innerHTML = '<h6 class = "count">Comments <span class ="counter">0<span></h6>';
  const id = 566525;
  const movie = {
    id,
  };
  counter(reciveCommentsApi, movie).then((json) => {
    const commentCounter = document.querySelector('body h6.count');
    const commentsArray = json;
    commentCounter.innerHTML = `Comments <span class ="counter">${commentsArray.length}<span>`;
    expect(Number(document.querySelector('h6 span.counter').textContent)).toBe(2);
  });
});
