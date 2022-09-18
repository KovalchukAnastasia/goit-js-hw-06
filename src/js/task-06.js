const inputEl = document.querySelector('#validation-input');
// console.log(inputEl.getAttribute('data-length'));
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputBlur => {
    if (inputEl.value.length == dataLength) {
        inputEl.classList = 'valid';
    } else {
        inputEl.classList = 'invalid';   
    }
    // console.log(inputEl.value);
});

