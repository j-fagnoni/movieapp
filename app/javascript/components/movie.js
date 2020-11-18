const displayMovie = (movie) => {
  const movieView = document.querySelector(".movie-view")
  const invisible = document.querySelector(".invisible")
  movieView.innerHTML = ""
  let moviePoster = ""
  if(movie.poster_path){
    moviePoster = movie.poster_path
  } else {
    moviePoster = "/atEmHkVFTSGRYt2PeCiziQqbZnI.jpg"
  }

  const castArr = []
  movie.credits.cast.forEach(member => castArr.push(`<tr><td>${member.name}</td><td>${member.character}</td></tr>`))
  movieView.innerHTML = 
  `
  
  <div class="movie-profile">
    <div class="movie-profile-1">
      <div class="position-relative">
        <img src="https://image.tmdb.org/t/p/w500${moviePoster}" class="movie-poster">
        <div class="add-to-list"><i class="far fa-plus-square"></i></div>
        ${invisible.innerHTML}
      </div>
      <div class="movie-details-cast">
        <h2 class="movie-title">${movie.title} <span class="movie-release-date"> (${movie.release_date.substring(0, 4)})</span></h2>
        <p class="synopsis">${movie.overview}</p>
        <h3 class="info-content"><span class="info-type">Duration : </span>${movie.runtime} minutes</h3>
        <h3 class="info-content"><span class="info-type">Director : </span>${movie.credits.crew.find(crewperson => crewperson.job == "Director").name}</h3>
        <h3 class="info-content"><span class="info-type">Score : </span>${movie.vote_average} / 10</h3>
      </div>
    </div>
  </div>
  `
  const movieProfile = movieView.querySelector(".movie-profile")
  const addToList = movieView.querySelector(".add-to-list")
  const castList = document.createElement("table")
  castList.innerHTML = "<tr><th>Actor</th><th>Character</th></tr>"
  castArr.forEach(castEl => castList.insertAdjacentHTML("beforeend", castEl))
  movieProfile.insertAdjacentElement("beforeend", castList)
  const posterListLayer = movieView.querySelector(".selector")
  posterListLayer.classList.add("poster-list-layer")
  addToList.addEventListener("click", (event) => {
    posterListLayer.classList.toggle("hidden")
  })
  const closeList = document.querySelector(".close-list")
  closeList.addEventListener("click", (event) => {
      posterListLayer.classList.toggle("hidden")
  })
}

const fetchMovieAndCredits = () => {
  const movieView = document.querySelector(".movie-view")
  if (movieView) {
    const movieId = movieView.innerText
    const categories = document.querySelectorAll(".categories")
    categories.forEach(category => {
      category.classList.remove("active")
    })
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e4f80194d29b9ac6bb8e120c3874b12e&append_to_response=credits&language=en-US`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      displayMovie(data)
    })
  }
}

export { fetchMovieAndCredits };
