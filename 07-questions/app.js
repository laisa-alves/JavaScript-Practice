//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(questionTile){    
    const questionBtn = questionTile.querySelector('.question-btn');

    questionBtn.addEventListener('click', function(){
        // loook through all questions and returns each one of then
        questions.forEach(function(allTiles){
            console.log(allTiles)
            // if another question tile, that wasn't clicked now, has the 'show-text' class, then remove it
            if (allTiles !== questionTile) {
                allTiles.classList.remove('show-text');
            }
        });

        questionTile.classList.toggle('show-text');
    });
});

// traversing the dom
// select all the buttons
// const btns = document.querySelectorAll('.question-btn');

// // add loop for listener events
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });