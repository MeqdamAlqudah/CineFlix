const cards = (movie) => `<div class="card p-0" id="card" style="width: 18rem;">
    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Card image cap">
    <div class="card-body">
    <div class="h-25 w-100">
      <h5 class="h6">${movie.title}</h5>
    </div>
    <div class="h-25 w-100 d-flex flex-column align-items-end" id="${movie.id}"> 
      <a class="btn-like"></a>
      <span class="spn-like">N/A</span>
    </div>  
    <div class="h-50 d-flex flex-column gap-2">
      <button class="btn btn-dark"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Comments</button>
      <a href="#" class="btn btn-warning reservation-btn">Reservations</a>
    </div>  
    </div>
  </div> `;

export default cards;