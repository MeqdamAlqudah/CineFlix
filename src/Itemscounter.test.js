import moviesCount from './app/Itemscounter.js';

test('counter should be equal to items count', () => {
  const movies = [{ movie: 'movie1' }, { movie: 'movie2' }, { movie: 'movie3' }];
  document.body.innerHTML = '<div id="movies-counter"></div>';
  const domElement = document.getElementById('movies-counter');
  moviesCount(movies, domElement);
  const result = domElement.innerText;
  expect(result).toBe(3);
});