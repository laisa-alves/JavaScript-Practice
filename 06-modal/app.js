// select itens
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-btn');

// add event listeners
modalBtn.addEventListener('click', function(){
    modal.classList.toggle('open-modal');
});

closeModalBtn.addEventListener('click', function(){
    modal.classList.remove('open-modal');
});

