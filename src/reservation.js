const reservation = (movie) => `<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      
      <div class="modal-body">
        <div>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        </div>
        <div class="modal-header">
          <h5 class="modal-title">${movie.original_title}</h5>
        </div>
        <div>
        <h6>Release Date: ${movie.release_date}</h6>
        <h6>Popularity: ${movie.popularity}</h6>
        <h6>Vote Count: ${movie.vote_count}</h6>
        <h6>Vote Average: ${movie.vote_average}</h6>
        </div>
      </div>

      <form>
  <div class="form-group">
   <input type="email" class="form-control exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name">
  </div>
  <div class="form-group">
    <input type="password" class="form-control start-date" placeholder="Start Date">
  </div>
  <div class="form-group">
  <input type="password" class="form-control end-date" placeholder="End Date">
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

export default reservation;