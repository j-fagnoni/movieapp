const searchR = () => {
  const searchBar = document.querySelector(".search-bar-r")
  if (searchBar) {
    const searchBtn = document.querySelector(".search-btn-r")
    const searchContainer = document.querySelector(".search-container-r")
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
      document.location.href = `https://movieapp-fagnoni.herokuapp.com/search/${searchBar.value}`
    })
  }
}

export { searchR };