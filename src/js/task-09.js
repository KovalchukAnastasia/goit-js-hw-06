function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('.body');
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color')

// console.log(btnEl)
// console.log(spanEl)
btnEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = document.body.style.backgroundColor;
}