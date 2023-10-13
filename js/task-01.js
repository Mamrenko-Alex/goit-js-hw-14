/*
Для зменшення кількості запитів до DOM можна було б позбавитись строки
під номером (), та відразу звернутися до document.querySelectorAll('.item').
Але мені здалося що в учбових цілях, доречніше явно прописати логіку.
Плюс, може бути однакові теги в інших списках з іншими айдішками.
*/
const categoriesList = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesList.childElementCount}`);

const categoriesItems = categoriesList.children;
console.log(Array.from(categoriesItems).forEach((item) => {
    const categoryName = item.firstElementChild.textContent;
    const childOfCategory = item.lastElementChild.childElementCount;
    console.log(`Category: ${categoryName}\nElements: ${childOfCategory}`);
}));
