const displayPopup = (element) => ` <div class="modal-content w-100 align-items-center border border-dark border-3">
<div class="modal-header w-75 border-0">
  <button type="button" class="btn-close" onclick = "close()"
  data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<div class="img-container d-flex justify-content-center flex-column align-items-center">
<h5 class="modal-title">${element.original_title}</h5>
<img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="w-50"></div>
  <p>Movie Recap:-</p>
  <p class="recap">${element.overview}</p>
 <div class="container">
     <ul class="row">
    <li id="popularity" class="col d-flex">Popularity: <p class="ms-2">${element.popularity}</p> </li>
    <li id="language" class="col d-flex"> Language: <p class="ms-2">${element.original_language}</p> </li>
</ul>
<ul class="row">
    <li id="release-date" class="col d-flex">
     Release: <p class="ms-2">${element.release_date}</p></li>
    <li id="vote" class="col d-flex"> Vote:<p class="ms-2">${element.vote_count}</p></li>
</ul>
 </div>
</div>
<h6 class = "count">Comments <span class ="counter">0<span></h6>
<ul class="comments-list">

</ul>
<h6>Add a comment</h6>
<div class="input-group d-flex flex-column flex-nowrap  w-50 addcomment">
    <input type="text" placeholder="Your name" class="Name
     form-control w-75 mb-3 border border-dark border-3">
    <input type="text" class="insights form-control w-100
    mb-3 border border-dark border-3">
    <button type="button" class="comment btn
    btn-outline-secondary w-75 align-self-start
    mb-3 border border-dark border-3">Comment</button>
  </div>
</div>`;

export default displayPopup;