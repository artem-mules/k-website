//@collapse
(function () {
    fsComponent2 = new FsLibrary('.cl__grid__media-list-wrapper--press')
})();

function startFinsweetFilter() {
    (function () {
        let myFilters = [{
            filterWrapper: '.media-filter--pr-year',
            filterType: 'exclusive',
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
}

function finSweetStartPaginator() {

    (function () {
        fsComponent2.loadmore({
            button: ".load-more-button",
            resetIx: true,
            loadAll: true,
            paginate: {
                enable: true,
                itemsPerPage: 4,
                insertPagination: '.pagination-container',
                bgColor: '#FFFFFF',
                bgColorActive: '#240c2e',
                textColor: '#240c2e',
                textColorActive: '#FFFFFF',
                borderColor: '#3D315B'
            },
            animation: {
                enable: false
            }
        })

    })();

}

function doFilterButtons() {
    //формируем года
    let yearPlaceholders = document.querySelectorAll('.body-3__media-card--presse');
    let pressFilterWrapperYear = document.querySelector('#press__media-filter-year');
    let pressFilterYears = new (Array);
    //делаем массив и срптируем его
    yearPlaceholders.forEach(placeholder => {
        let stepPlaceholderValue = placeholder.textContent;
        let stepPlaceholderSplit = stepPlaceholderValue.split(" ");
        let currentYear = stepPlaceholderSplit[stepPlaceholderSplit.length - 1];
        if (pressFilterYears.includes(currentYear) == false) {
            pressFilterYears.push(currentYear);
        }
    });
    pressFilterYears.sort();
    pressFilterYears.reverse();
    //добавляем кнопки годов фильтр
    pressFilterYears.forEach(category => {
        let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
        clonableFiterButton.setAttribute('filter-by', category);
        let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
        clonableFiterButtonP.textContent = category;
        pressFilterWrapperYear.append(clonableFiterButton);
    });
}

function hideLangItems() {
    let weGlotLang = Weglot.getCurrentLang();
    let allCards = document.querySelectorAll('.cl-i__grid__media-list-wrapper');
    if (weGlotLang == 'en') {
        allCards.forEach(card => {
            let cardLangId = card.querySelector('.filter-by-lang-id').textContent;
            if (cardLangId != 'English') {
                card.remove();
            }
        });
    } else {
        allCards.forEach(card => {
            let cardLangId = card.querySelector('.filter-by-lang-id').textContent;
            if (cardLangId != 'Deutsch') {
                card.remove();
            }
        });
    }
}

function contactPageStart() {

    //____________________________________________________________________________________
    //countrues and sates_________________________________________________________________
    let countryListInput = document.querySelector('#land__newsletter-ab');
    let stateTriggerShow = document.querySelector('.o__input-countries-wrapper__1');
    let stateTriggerClose = document.querySelector('.c__input-countries-wrapper__1');

    countryListInput.addEventListener('change', function () {
        if (this.value == 'Deutschland') {
            stateTriggerShow.click();
        } else {
            stateTriggerClose.click();
        }
    });
}

finSweetStartPaginator();
