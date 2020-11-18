const displaySearchResults = () => {
  const searchResults = document.querySelector(".search-results")
  if (searchResults) {
    fetchResults(window.location.pathname.substr(8,).replace("%20", " "))
  }
}

const fetchResults = (query) => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=e4f80194d29b9ac6bb8e120c3874b12e&language=en-US&query=${query}&page=1&include_adult=false`)
  .then(response => response.json())
  .then((data) => {
    data.results.forEach(movie => displayMovie(movie));
  })
}

const displayMovie = (movie) => {
  const searchResults = document.querySelector(".search-results")
  const movieCard = document.createElement("div")
  let moviePoster = ""
  if(movie.poster_path){
    moviePoster = movie.poster_path
  } else {
    moviePoster = "/atEmHkVFTSGRYt2PeCiziQqbZnI.jpg"
  }
  movieCard.innerHTML = 
  `
  <img src="https://image.tmdb.org/t/p/w200${moviePoster}" class="poster">
  <div class="movie-info">
    <h2>${movie.title}</h2>
    <h3>${movie.release_date.substring(0, 4)}</h3>
  </div>
  `
  searchResults.appendChild(movieCard)
  movieCard.classList.add("movie")
  const poster = movieCard.querySelector(".poster")
  poster.addEventListener('click', (event) => {
    document.location.href = `https://movieapp-fagnoni.herokuapp.com/movies/${movie.id}`
  })
}

export { displaySearchResults };   
