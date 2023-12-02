document.addEventListener("DOMContentLoaded", function() {
  // Function to open the search bar
  function openSearchBar() {
    var searchInput = document.querySelector(".md-search__input");
    if (searchInput) {
      searchInput.focus();
      searchInput.classList.add("focus-visible")
    }
  }

  // Listen for the Ctrl + K key combination
  document.addEventListener("keydown", function(event) {
    if (event.metaKey && event.key === "k") {
      console.log("here")
      event.preventDefault();
      openSearchBar();
    }
  });
});
