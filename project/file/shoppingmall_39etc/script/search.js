const searchBtn = document.querySelector('.fa-search');
const closeBtn = document.querySelector('.mainmenu .fa-times');

const gnbElem = document.querySelector('.mainmenu ul')
const textSearchBar = document.querySelector('.mainmenu label');
const openSearch = () =>{
    gnbElem.style.display = 'none';
    textSearchBar.style.display ='block';
}
const closeSearch = () =>{
    textSearchBar.style.display = 'none';
    gnbElem.style.display = 'flex';
}
function showSearch() {
    searchBtn.addEventListener('click', openSearch);
    closeBtn.addEventListener('click', closeSearch);
}

showSearch();