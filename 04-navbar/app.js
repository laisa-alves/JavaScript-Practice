// select items
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// add event listener
navToggle.addEventListener('click', function () {
    // using contains | add | remove - checks classList for specific class
    // (links.classList.contains('show-links')) ? links.classList.remove('show-links') : links.classList.add('show-links')

    // using toggle
    links.classList.toggle('show-links');

});