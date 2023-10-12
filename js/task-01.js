/*
Для зменшення кількості запитів до DOM можна було б позбавитись строки
під номером (), та відразу звернутися до document.querySelectorAll('.item').
Але мені здалося що в учбових цілях, доречніше явно прописати логіку.
Плюс, може бути однакові теги в інших списках з іншими айдішками.
*/
const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const childOfCategory = category.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}\nElements: ${childOfCategory}`);
});
