const reservation = (movie) => `
<div class="modal modal-reservation" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      
      <div class="modal-body">
          <div>
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-reservation">
          </div>
          <div class="modal-header">
              <h5 class="modal-title">${movie.original_title}</h5>
          </div>
          <div class="details d-flex w-75">
            <h6>Release Date: ${movie.release_date}</h6>
            <h6>Popularity: ${movie.popularity}</h6>
            <h6>Vote Count: ${movie.vote_count}</h6>
            <h6>Vote Average: ${movie.vote_average}</h6>
          </div>
      
          <div>
            <h6 class="count-reservation">Reservations(0)</h6>
            <ul class="reservation-list overflow-auto"></ul>
          </div>
          <form>
            <div class="form-group">
            <p class ="error-reservation"></p>
            <input type="text" class="form-group name mb-3" placeholder="Your Name">
            </div>
            <div class="form-group">
              <input type="date" class="form-group start-date mb-3" placeholder="Start Date">
            </div>
            <div class="form-group">
              <input type="date" class="form-group end-date mb-3" placeholder="End Date">
            </div>
          </form>
</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-color reservation-submit">Submit</button>
        <button type="button" class="btn btn-secondary reservation-close" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

export default reservation;