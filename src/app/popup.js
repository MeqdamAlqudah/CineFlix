const displayPopup = (element) => ` <div class="modal-content modal-content-comments w-100 align-items-center border border-dark border-3">
<div class="modal-header w-75 border-0">
  <button type="button" class="btn-close btn-close-white float-end mt-2" onclick = "close()"
  data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<div class="img-container d-flex justify-content-center flex-column align-items-center">
<h5 class="modal-title">${element.original_title}</h5>
<img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="w-50"></div>
  <p class = "recaptitle">Movie Recap</p>
  <p class="recap">${element.overview}</p>
 <div class="container container-comments">
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
<p id = "error"></p>
<ul class="comments-list overflow-auto">

</ul>
<h6>Add a comment</h6>
<div class="comment-input input-group d-flex flex-column flex-nowrap  w-50 addcomment">
    <input type="text" placeholder="Your name" class="Name
      w-75 mb-3 border border-warning text-warning">
    <input type="text" class="insights  w-100
    mb-3 border border-warning text-warning">
    <button type="button" class="comment btn w-75 align-self-start
    mb-3 border border-warning text-warning">Comment</button>
  </div>
</div>`;

export default displayPopup;