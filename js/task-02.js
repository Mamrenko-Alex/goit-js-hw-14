const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const result = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.innerHTML += result;