const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  ingredients: document.querySelector('#ingredients')
}

function createEl(arr) {

  return arr.map(el => {
    const createIngredient = document.createElement('li');
    createIngredient.textContent = el;
    createIngredient.classList.add('item');
    return createIngredient;
  })
    
}

refs.ingredients.append(...createEl(ingredients))
