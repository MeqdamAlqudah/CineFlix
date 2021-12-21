import './main.scss';
import 'bootstrap';
import getData from './app/api.js';

const movieList = document.getElementById('movie-list');

const renderMovies = () => {
  getData().then((movies) => {
    movies.forEach((movie) => {
      movieList.innerHTML += `
<div class="card p-0" style="width: 18rem;">
  <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Card image cap">
  <div class="card-body">
  <div class="h-25 w-100">
    <h5 class="h6">${movie.title}</h5>
  </div>
  <div class="h-25 w-100 d-flex flex-column align-items-end"> 
    <a class="btn-like"></a>
    <span>5 Likes</span>
  </div>  
  <div class="h-50 d-flex flex-column gap-2">
    <a href="#" class="btn btn-dark">Comments</a>
    <a href="#" class="btn btn-warning">Rezervations</a>
  </div>  
  </div>
</div> `;
    });
  });
};
renderMovies();