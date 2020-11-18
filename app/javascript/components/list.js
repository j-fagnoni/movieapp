const displayListMovies = () => {
  const listShowContainer = document.querySelector(".list-show-container")
  if (listShowContainer) {
    const listShowContainer1 = document.querySelectorAll(".list-show-container-1")
    const listShowContainer2 = document.querySelectorAll(".list-show-container-2")
    const content = []
    const ids = []
    listShowContainer1.forEach(x => {
      content.push(x.innerText)
    })
    listShowContainer2.forEach(y => {
      ids.push(y.innerText)
    })
    listShowContainer.innerHTML = ""
    content.forEach((movieId, index) => {
      let contentId = ids[index];
      fetchMovie(movieId, contentId)
    });
  }
}


const displayMovie = (movie, contentid) => {
  const movieCard = document.createElement("div")
  const listShowContainer = document.querySelector(".list-show-container")
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
  <a class="trash-list-show" rel="nofollow" data-method="delete" href="${window.location.pathname}/${contentid}"><i class="fas fa-trash-alt"></i></a>
  `
  listShowContainer.appendChild(movieCard)
  movieCard.classList.add("movie")
  const poster = movieCard.querySelector(".poster")
  poster.addEventListener('click', (event) => {
    document.location.href = `https://movieapp-fagnoni.herokuapp.com/movies/${movie.id}`
  })
}

const fetchMovie = (id, contentid) => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e4f80194d29b9ac6bb8e120c3874b12e&language=en-US`)
  .then(response => response.json())
  .then(data => displayMovie(data, contentid));
}

export { displayListMovies };
