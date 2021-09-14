let eventFilterWrapper = document.querySelector('.media-filter--event');
let eventListTagsPlaceholders = document.querySelectorAll('.navigation--card--event');
let eventFilterCategories = new(Array);


//составляем массив категорий и сортируем его
eventListTagsPlaceholders.forEach(placeholder => {
    stepPlaceholderValue = placeholder.textContent;
    if (eventFilterCategories.includes(stepPlaceholderValue) == false) {
        eventFilterCategories.push(stepPlaceholderValue);
    }
});
eventFilterCategories.sort();
//добавляем актуальные кнопки
eventFilterCategories.forEach(category => {
    let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
    clonableFiterButton.setAttribute('filter-by', category);
    let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
    clonableFiterButtonP.textContent = category;
    eventFilterWrapper.append(clonableFiterButton);
});
//прячем кнопки, если категорий мало
let eventFilterButtons = document.querySelectorAll('.media-filter--event .media-filter__item');
if (eventFilterButtons.length <= 2) {
    eventFilterWrapper.style.display = 'none';
}

//_______________________________________________________________________________________________________________

let pressFilterWrapperCategory = document.querySelector('#press__media-filter-cat');
let pressFilterCategories = new (Array);
let pressListTagsPlaceholders = document.querySelectorAll('.navigation--card--press');



//составляем массив категорий и сортируем его
pressListTagsPlaceholders.forEach(placeholder => {
    stepPlaceholderValue = placeholder.textContent;
    if (pressFilterCategories.includes(stepPlaceholderValue) == false) {
        pressFilterCategories.push(stepPlaceholderValue);
    }
});
pressFilterCategories.sort();
//добавляем актуальные кнопки
pressFilterCategories.forEach(category => {
    let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
    clonableFiterButton.setAttribute('filter-by', category);
    let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
    clonableFiterButtonP.textContent = category;
    pressFilterWrapperCategory.append(clonableFiterButton);
});

//_______________________________________________________________________________________________________________

let yearPlaceholders = document.querySelectorAll('.body-3__media-card--presse');
let pressFilterWrapperYear = document.querySelector('#press__media-filter-year');
let pressFilterYears = new (Array);

//составляем массив категорий и сортируем его
yearPlaceholders.forEach(placeholder => {
    let stepPlaceholderValue = placeholder.textContent;
    let stepPlaceholderSplit = stepPlaceholderValue.split(" ");
    let currentYear = stepPlaceholderSplit[stepPlaceholderSplit.length - 1];


    if (pressFilterYears.includes(currentYear) == false) {
        pressFilterYears.push(currentYear);
    }
});
pressFilterYears.sort();


//добавляем актуальные кнопки
pressFilterYears.forEach(category => {
    let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
    clonableFiterButton.setAttribute('filter-by', category);
    let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
    clonableFiterButtonP.textContent = category;
    pressFilterWrapperYear.append(clonableFiterButton);
});


//действия, которые лучше выполнить в конце
//причем системные теги
let cardsAlleTags = document.querySelectorAll('.media-filter__item .navigation');
cardsAlleTags.forEach(alleTag => {
    if (alleTag.textContent != 'Alle' && alleTag.textContent != 'All' && alleTag.textContent != 'English' && alleTag.textContent != 'Deutsch' && alleTag.textContent != 'Germany') {
        let currentAlleTag = alleTag.parentElement;
        currentAlleTag.classList.remove('media-filter__item--cards');
    }
});


