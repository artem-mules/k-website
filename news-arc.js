let pressFilterWrapperCategory = document.querySelector('#press__media-filter-cat');
let initCounter = 0;


let eventFilterWrapper = document.querySelector('.media-filter--event');
let eventListTagsPlaceholders = document.querySelectorAll('.navigation--card--event');
let eventFilterCategories = new (Array);

//make an array of categories and sort it
eventListTagsPlaceholders.forEach(placeholder => {
    stepPlaceholderValue = placeholder.textContent;
    if (eventFilterCategories.includes(stepPlaceholderValue) == false) {
        eventFilterCategories.push(stepPlaceholderValue);
    }
});
eventFilterCategories.sort();

//Add actual buttons
eventFilterCategories.forEach(category => {
    let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
    clonableFiterButton.setAttribute('filter-by', category);
    let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
    clonableFiterButtonP.textContent = category;
    eventFilterWrapper.append(clonableFiterButton);
});

//Hide the buttons if there are few categories
let eventFilterButtons = document.querySelectorAll('.media-filter--event .media-filter__item');
if (eventFilterButtons.length <= 2) {
    eventFilterWrapper.style.display = 'none';
}

//_______________________________________________________________________________________________________________
// let pressFilterWrapperCategory = document.querySelector('#press__media-filter-cat');
let pressFilterCategories = new (Array);
let pressListTagsPlaceholders = document.querySelectorAll('.navigation--card--press');

//make an array of categories and sort it
pressListTagsPlaceholders.forEach(placeholder => {
    stepPlaceholderValue = placeholder.textContent;
    if (pressFilterCategories.includes(stepPlaceholderValue) == false) {
        pressFilterCategories.push(stepPlaceholderValue);
    }
});
pressFilterCategories.sort();

//Add actual buttons
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

//make an array of categories and sort it
yearPlaceholders.forEach(placeholder => {
    let stepPlaceholderValue = placeholder.textContent;
    let stepPlaceholderSplit = stepPlaceholderValue.split(" ");
    let currentYear = stepPlaceholderSplit[stepPlaceholderSplit.length - 1];


    if (pressFilterYears.includes(currentYear) == false) {
        pressFilterYears.push(currentYear);
    }
});
pressFilterYears.sort();

//Add actual buttons
pressFilterYears.forEach(category => {
    let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
    clonableFiterButton.setAttribute('filter-by', category);
    let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
    clonableFiterButtonP.textContent = category;
    pressFilterWrapperYear.append(clonableFiterButton);
});

//actions that are better to perform at the end
//and system tags
let cardsAlleTags = document.querySelectorAll('.media-filter__item .navigation');
cardsAlleTags.forEach(alleTag => {
    if (alleTag.textContent != 'Alle' && alleTag.textContent != 'All' && alleTag.textContent != 'English' && alleTag.textContent != 'Deutsch' && alleTag.textContent != 'Germany') {
        let currentAlleTag = alleTag.parentElement;
        currentAlleTag.classList.remove('media-filter__item--cards');
    }
});



//moved the finsweet here
(function () {
    let fsComponent1 = new FsLibrary('.cl__grid__media-list-wrapper--event')

    let myFilters = [{
        filterWrapper: '.media-filter--event',
        filterType: 'exclusive'
    }]

    fsComponent1.filter({
        filterArray: myFilters,
        activeClass: 'w--current',
        animation: {
            enable: true
        }
    })
})();

(function () {
    let fsComponent2 = new FsLibrary('.cl__grid__media-list-wrapper--press')
    fsComponent2.combine()

    let myFilters = [{
        filterWrapper: '.media-filter--pr-cat',
        filterType: 'multi'
    },
    {
        filterWrapper: '.media-filter--pr-year',
        filterType: 'multi'
    }
    ]

    fsComponent2.filter({
        filterArray: myFilters,
        activeClass: 'w--current',
        animation: {
            enable: true
        }
    })
})();




// function testFilter() {
//     if (initCounter < 1) {
//         testWeGlot();
//         initCounter = initCounter + 1;
//     } else {
//         function reloadThisPage() {
//             document.location.reload();
//         }
//         setTimeout(reloadThisPage, 1000);
//     }
// }

function listenToLangChange() {
    // console.log('ran a wiretap');
    // Weglot.on("languageChanged", function () {
    //     console.log('languageChanged');
    //     testFilter();
    // })
}

Weglot.on("initialized", function () {
    // console.log('initialized');
    // testFilter();
    // setTimeout(listenToLangChange, 3000);
})