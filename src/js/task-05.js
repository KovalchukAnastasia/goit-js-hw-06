const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

// console.log(inputEl);
// console.log(outputEl);

inputEl.addEventListener('input', () => {
    if (inputEl.value.length == 0) {
        outputEl.textContent = "Anonymous";
    } else {
        outputEl.textContent = inputEl.value;
    }
        // console.log(inputEl.value);
    });
