// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import { fetchPopular } from "../components/popular.js"
import { fetchUpcoming } from "../components/upcoming.js"
import { fetchMovieAndCredits } from "../components/movie.js"
import { search } from "../components/search.js"
import { searchR } from "../components/search-r.js"
import { displaySearchResults } from "../components/search-results.js"
import { displayListMovies } from "../components/list.js"
import { displayPreviewList } from "../components/list-preview.js"

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  fetchPopular();
  fetchUpcoming();
  fetchMovieAndCredits();
  search();
  searchR();
  displaySearchResults();
  displayListMovies();
  displayPreviewList();
});