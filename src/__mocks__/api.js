/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// const sendCommentsToApi = ({
//   type, body,
// }) => {
//   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rEViJgSZrOmcE6w0blo4/comments';
//   fetch(url, {
//     method: type,
//     body,
//     headers: {
//       'Content-type': 'application/json; charset=utf-8',
//     },
//   });
// };

const reciveCommentsApi = (id) => {
  const comments = Promise.resolve([{ username: '', creation_date: '2021-12-23', comment: '' }, { username: 'Meqdam', comment: 'great movie', creation_date: '2021-12-23' }]);
  const json = () => comments;
  const movie = { json };
  const data = Promise.resolve(movie);
  return data;
};

export default reciveCommentsApi;