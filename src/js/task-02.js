const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const items = ingredients.map(item => {
  const itemsEl = document.createElement('li');
  itemsEl.classList.add('item');
  itemsEl.textContent = item;
  return itemsEl;
});

// console.log(items)


ingredientsEl.append(...items);




