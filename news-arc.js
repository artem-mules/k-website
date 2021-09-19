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
    let fsComponent2 = new FsLibrary('.cl__grid__media-list-wrapper--press')
    fsComponent2.combine()

    let myFilters = [{
        filterWrapper: '.media-filter--pr-year',
        filterType: 'multi',
        filterByClass: ".filter-by-year-id"
    }]

    fsComponent2.filter({
        filterArray: myFilters,
        activeClass: 'w--current',
        animation: {
            enable: true
        }
    })
})();

function hideLangItems() {
    let currentPageLang = Weglot.getCurrentLang();
    if (currentPageLang == 'en') {
        console.log('это инглиш ман ин нюёрк');
    } else {
        console.log('ду хаст мих гефраген');
    }
}


Weglot.on("languageChanged", function () {
    hideLangItems();
})


Weglot.on("initialized", function () {
    hideLangItems();
})

