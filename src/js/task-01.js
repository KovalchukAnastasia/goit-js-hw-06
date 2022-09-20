const listEl = document.querySelectorAll('.item');
console.log('Number of categories:', listEl.length);

for (let i = 0; i < listEl.length; i += 1) {
    const titleEl = listEl[i].firstElementChild.textContent;
    const countEl = listEl[i].lastElementChild.children.length;
    console.log('Category:', titleEl);
    console.log('Elements', countEl);
}


