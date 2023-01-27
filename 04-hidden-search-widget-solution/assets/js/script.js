const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');

searchBtn.addEventListener('click', function() {
  if (searchInput.classList.contains('opened')) {
    searchInput.classList.remove('opened');
    searchInput.blur();
    searchInput.value = '';
  } else {
    searchInput.classList.add('opened');
    searchInput.focus();
  }
})