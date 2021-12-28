/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import counter from './counter.js';

jest.mock('./app/comment.js');

test('Expect the number of comments equal the value of counter', () => {
  document.body.innerHTML = '<h6 class = "count">Comments <span class ="counter">0<span></h6>'
    + '<ul class="comments-list overflow-auto">'
    + '<li>2021-12-25  Evren : Nice movie, I love it.</li>'
    + '<li>2021-12-28  Meqdam : nice movie</li>'
    + '<li>2021-12-28  Zaid : counts moment to see it</li>'
    + '</ul> ';
  const commentCounter = document.querySelector('body h6.count');

  commentCounter.innerHTML = `Comments <span class ="counter">${counter()}<span>`;
  expect(Number(document.querySelector('h6 span.counter').textContent)).toBe(3);
});
