function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls > input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
// console.log(inputEl);
// console.log(btnCreateEl);
// console.log(btnDestroyEl);
// console.log(boxesEl);
// let value = 1;

btnCreateEl.addEventListener('click', onBtnCreate);

function onBtnCreate(event) {
  // console.log(inputEl.value);
  const maxEl = Number(inputEl.value);
  createBoxes(maxEl);
};

function createBoxes(amount) {
    for (let i = 1; i <= amount; i += 1) {
    const newDivEl = document.createElement('div');
    newDivEl.style.width = (30 + (i - 1) * 10) + 'px';
    newDivEl.style.height = newDivEl.style.width;
    newDivEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(newDivEl);
  }
}

btnDestroyEl.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  boxesEl.innerHTML = '';
};




