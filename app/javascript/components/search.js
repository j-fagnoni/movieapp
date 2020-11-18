const search = () => {
  const searchBar = document.querySelector(".search-bar")
  if (searchBar) {
    const searchBtn = document.querySelector(".search-btn")
    const searchContainer = document.querySelector(".search-container")
    searchBar.addEventListener('focusin', (event) => {
      searchContainer.classList.add("focused")
    })
    searchBar.addEventListener('focusout', (event) => {
      searchContainer.classList.remove("focused")
    })
    searchBar.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        searchBtn.click()
      }
    })
    searchBtn.addEventListener('click', (event) => {
      if (searchBar.value == "") {
        document.location.href = `https://movieapp-fagnoni.herokuapp.com/search/sharknado`
      } else {
        document.location.href = `https://movieapp-fagnoni.herokuapp.com/search/${searchBar.value}`
      }
    })
  }
}

function setFocused() {
  var results = document.querySelectorAll('.arbitrary');
  for (result of results) {
    result.classList.add('focused');
  }
}

function unsetFocused() {
  var results = document.querySelectorAll('.arbitrary');
  for (result of results) {
    result.classList.remove('focused');
  }
}

var results = document.querySelectorAll('input[type="text"]');
for (result of results) {
  result.addEventListener("focusin", setFocused);
  result.addEventListener("focusout", unsetFocused);
}

export { search };
