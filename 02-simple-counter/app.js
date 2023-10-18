// set inicial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
console.log(btns)

// NodeList method forEach - loop through every item of the list
btns.forEach(function (btn) {
    console.log(btn)
    btn.addEventListener('click', function (e) {
        const btnClasses = e.currentTarget.classList;
        // buttons actions
        if (btnClasses.contains('decrease')) {
            count--;
        }
        else if(btnClasses.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        // color change
        if(count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = '#000'
        }
        
        // text count
        value.textContent = count;
    });
});