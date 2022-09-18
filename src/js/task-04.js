const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('#value')

// console.log(decrementBtnEl);
// console.log(incrementBtnEl);

let counterValue = 0;
decrementBtnEl.addEventListener('click', onClick => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
});

incrementBtnEl.addEventListener('click', onClick => {
    counterValue += 1;
    spanEl.textContent = counterValue;
});


