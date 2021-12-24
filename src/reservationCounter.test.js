import reservationCount from './reservationCounter.js';

test('Should return count of reservation', () => {
  const data = [{movie: 'Spiderman'}, {movie: 'Meqdam'}, {movie: 'Lisa'}, {movie: 'Alen'}];
  const result = reservationCount(data);
  expect(result).toBe(4);
});