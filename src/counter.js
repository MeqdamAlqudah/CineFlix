const counter = (reciveCommentsApi, movie) => reciveCommentsApi(movie.id)
  .then((element) => (element.json()));

export default counter;