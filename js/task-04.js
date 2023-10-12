let counterValue = 0

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value')

function updateValue() {
    value.textContent = counterValue
};

decrementButton.addEventListener('click', () => {
    counterValue -= 1
    updateValue();
});

incrementButton.addEventListener('click', () => {
    counterValue += 1
    updateValue();
});

/*
Мені здається що завдання було б краще як би початкове значення треба було також реалізувати
через js. Типу данні на бекенді. В такому випадку, треба ініціалізувати початкове значення.

updateValue();

Також захотілось додати дві кнопки. Чисто випробувати себе😁. Якщо-що можу видалити.
*/

const divCounter = document.querySelector('#counter');
// Створення кнопки "Зменшити на 10"
const decrementButton10 = document.createElement('button');
decrementButton10.type = 'button';
decrementButton10.setAttribute('data-action', 'decrement-10');
decrementButton10.textContent = '-10';

// Створення кнопки "Збільшити на 10"
const incrementButton10 = document.createElement('button');
incrementButton10.type = 'button';
incrementButton10.setAttribute('data-action', 'increment-10');
incrementButton10.textContent = '+10';

// Додавання кнопок в DOM
divCounter.insertAdjacentElement('afterbegin', decrementButton10);
divCounter.insertAdjacentElement('beforeend', incrementButton10);

decrementButton10.addEventListener('click', () => {
    counterValue -= 10
    updateValue();
});

incrementButton10.addEventListener('click', () => {
    counterValue += 10
    updateValue();
});
