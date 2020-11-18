const displayPreviewList = () => {
  const listContainer2 = document.querySelector(".list-container-2")
  if (listContainer2) {
    const listInnerContainer = document.querySelectorAll(".list-inner-container")
    listInnerContainer.forEach(container => {
      const listPreviewContainer = container.querySelector(".list-preview-container")
      const previews = listPreviewContainer.querySelector(".previews")
      previews.innerHTML = ""
      getHiddenData(container)
    })
  }
}

const getHiddenData = (container) => {
  const hiddenData = container.querySelector(".hidden-data")
  let idsList = hiddenData.innerHTML.toString().replaceAll('<div class="hidden-id">', "").replaceAll("</div>", "").replace(/^\s+|\s+$|\s+(?=\s)/g, "").split(" ")
  if (idsList.length > 5) {
    idsList = idsList.slice(Math.max(idsList.length - 5, 0))
  }
  if (idsList[0] !== "") {
    idsList.forEach(movieId => {
      fetchPoster(movieId, container)
    });
  }
}


const fetchPoster = (movieId, container) => {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e4f80194d29b9ac6bb8e120c3874b12e&language=en-US`)
  .then(response => response.json())
  .then((data) => {
    displayMovie(data, container)
  })
}



const displayMovie = (movie, container) => {
  let moviePoster = ""
  if(movie.poster_path){
    moviePoster = movie.poster_path
  } else {
    moviePoster = "/atEmHkVFTSGRYt2PeCiziQqbZnI.jpg"
  }

  const poster = document.createElement("img")
  poster.src = `https://image.tmdb.org/t/p/w200${moviePoster}`
  const listPreviewContainer = container.querySelector(".list-preview-container")
  const previews = listPreviewContainer.querySelector(".previews")
  previews.appendChild(poster)
}

export { displayPreviewList }
