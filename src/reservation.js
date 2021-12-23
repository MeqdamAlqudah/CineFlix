const reservation = (movie) => `<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${movie.original_title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div class="modal-body">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <div>
        <h5>${movie.release_date}</h5>
        <h5>${movie.popularity}</h5>
        </div>
      </div>

      <form>
  <div class="form-group">
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id="start-date" placeholder="Start Date">
  </div>
  <div class="form-group">
  <input type="password" class="form-control" id="end-date" placeholder="End Date">
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