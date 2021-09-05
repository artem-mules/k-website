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


//сумасшедий show more :) сейчас поедет крыша
let buttonsShowMore = document.querySelectorAll('.buttons--show-more');

function checkCardsLength() {
    buttonsShowMore.forEach(checkShowMoreButton => {
        let currentCardsWrapper = checkShowMoreButton.previousSibling;
        let currentCards = currentCardsWrapper.querySelectorAll('.cl-i__grid__media-list-wrapper');

        let parentCounter = checkShowMoreButton.parentElement;
        parentCounter.setAttribute('cards-counter', currentCards.length);

        if (currentCards.length <= 4 && checkShowMoreButton.classList.contains('element-hide') == false) {
            checkShowMoreButton.classList.add('element-hide');
            checkShowMoreButton.classList.remove('element-flex');
        }
        if (currentCards.length >= 4 && checkShowMoreButton.classList.contains('element-flex') == false) {
            checkShowMoreButton.classList.remove('element-hide');
            checkShowMoreButton.classList.add('element-flex');
        }
    });
}

checkCardsLength();

buttonsShowMore.forEach(showMoreButton => {
    let parentCounter = showMoreButton.parentElement;
    let counterValue = parentCounter.getAttribute('visible-counter');
    let cardsCountValue = parentCounter.getAttribute('cards-counter');

    counterValue = parseInt(counterValue);
    cardsCountValue = parseInt(cardsCountValue);
    showMoreButton.addEventListener('click', function () {
        if ((cardsCountValue-4) <= counterValue) {
            showMoreButton.classList.add('element-hide');
            showMoreButton.classList.remove('element-flex');
        }

        counterValue = (counterValue + 4);
        parentCounter.setAttribute('visible-counter', counterValue);
    });
});


let allMediaCards = document.querySelectorAll('.cl-i__grid__media-list-wrapper');

allMediaCards.forEach(mediaCard => {
    mediaCard.classList.add('cl-i__grid__media-list-wrapper--more-hide');
});

//что-то, не знаю что
let cardsSections = document.querySelectorAll('[visible-counter]');
function cardsFunc () {

    allMediaCards.forEach(mediaCard => {
        if (mediaCard.classList.contains('cl-i__grid__media-list-wrapper--more-hide') == false) {
            mediaCard.classList.add('cl-i__grid__media-list-wrapper--more-hide');
        }
    });


    cardsSections.forEach(cardsSection => {
        let currentCounter = cardsSection.getAttribute('visible-counter');
        currentCounter = parseInt(currentCounter);

        let currentMediaCards = cardsSection.querySelectorAll('.cl-i__grid__media-list-wrapper');
        let elementsWithoutStyleAttr = new(Array);
        currentMediaCards.forEach(currentMediaCard => {
            if (currentMediaCard.getAttribute("style", "display: none;") == false) {
                elementsWithoutStyleAttr.push(currentMediaCard);
            }
        });
        // console.log(elementsWithoutStyleAttr.length + ' элементов без аттрибута');
        let slicedArray = elementsWithoutStyleAttr.slice(0, currentCounter);
        slicedArray.forEach(slicedElement => {
            slicedElement.classList.remove('cl-i__grid__media-list-wrapper--more-hide');
        });
    });
}



//test style attribute
let bodyElement = document.querySelector('body')
bodyElement.addEventListener('click', function () {
    // let allElements = document.querySelectorAll('.cl-i__grid__media-list-wrapper[style="display: none;"]');
    // console.log(allElements.length + ' скрытых эелементов');
    setTimeout(cardsFunc, 3000);
});

cardsFunc();