const displayUpcoming = (movie) => {
  const upcomingMovies = document.querySelector(".upcoming-movies")
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
  upcomingMovies.appendChild(movieCard)
  movieCard.classList.add("movie")
  const poster = movieCard.querySelector(".poster")
  poster.addEventListener('click', (event) => {
    document.location.href = `https://movieapp-fagnoni.herokuapp.com/movies/${movie.id}`
  })
}




const fetchUpcoming = () => {
  const upcomingMovies = document.querySelector(".upcoming-movies")
  if (upcomingMovies) {
    const upcoming = document.querySelector(".upcoming")
    const categories = document.querySelectorAll(".categories")
    categories.forEach(category => {
      category.classList.remove("active")
    })
    upcoming.classList.add("active")
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=e4f80194d29b9ac6bb8e120c3874b12e&language=en-US&page=1`)
    .then(response => response.json())
    .then((data) => {
      data.results.forEach(movie => displayUpcoming(movie));
    })
  }
}

export { fetchUpcoming };
