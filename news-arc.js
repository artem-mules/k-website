function pagOnClickScroll() {
    let pagWrapper = document.querySelector('#wf-fslib-pagination');
    let hiddenPagTrigger = document.querySelector('.hidden-link');
    pagWrapper.addEventListener('click', function () {
        setTimeout(hiddenPagTrigger.click(), 300);
    });
}





function translateDateToGerman() {
    let dateLabels = document.querySelectorAll('.body-3--date');

    if (Weglot.getCurrentLang() == 'de') {
        dateLabels.forEach(label => {
            splittedLabel = label.textContent.split(' ')
            currentNonth = splittedLabel[0];

            if (currentNonth == 'Jan') {
                currentNonth = 'Jan'
            }

            if (currentNonth == 'Feb') {
                currentNonth = 'Feb'
            }
            if (currentNonth == 'Mar') {
                currentNonth = 'Mär'
            }
            if (currentNonth == 'Apr') {
                currentNonth = 'Apr'
            }
            if (currentNonth == 'May') {
                currentNonth = 'Mai'
            }
            if (currentNonth == 'Jun') {
                currentNonth = 'Jun'
            }
            if (currentNonth == 'Jul') {
                currentNonth = 'Jul'
            }
            if (currentNonth == 'Aug') {
                currentNonth = 'Aug'
            }
            if (currentNonth == 'Sep') {
                currentNonth = 'Sep'
            }
            if (currentNonth == 'Oct') {
                currentNonth = 'Okt'
            }
            if (currentNonth == 'Nov') {
                currentNonth = 'Nov'
            }
            if (currentNonth == 'Dec') {
                currentNonth = 'Dez'
            }


            label.textContent = (currentNonth + ' ' + splittedLabel[1] + ' ' + splittedLabel[2]);
        });
    } else {
        dateLabels.forEach(label => {
            splittedLabel = label.textContent.split(' ')
            currentNonth = splittedLabel[0];

            if (currentNonth == 'Jan') {
                currentNonth = 'Jan'
            }

            if (currentNonth == 'Feb') {
                currentNonth = 'Feb'
            }
            if (currentNonth == 'Mär') {
                currentNonth = 'Mar'
            }
            if (currentNonth == 'Apr') {
                currentNonth = 'Apr'
            }
            if (currentNonth == 'Mai') {
                currentNonth = 'May'
            }
            if (currentNonth == 'Jun') {
                currentNonth = 'Jun'
            }
            if (currentNonth == 'Jul') {
                currentNonth = 'Jul'
            }
            if (currentNonth == 'Aug') {
                currentNonth = 'Aug'
            }
            if (currentNonth == 'Sep') {
                currentNonth = 'Sep'
            }
            if (currentNonth == 'Okt') {
                currentNonth = 'Oct'
            }
            if (currentNonth == 'Nov') {
                currentNonth = 'Nov'
            }
            if (currentNonth == 'Dez') {
                currentNonth = 'Dec'
            }


            label.textContent = (currentNonth + ' ' + splittedLabel[1] + ' ' + splittedLabel[2]);
        });
    }

}

(function () {
    fsComponent2 = new FsLibrary('.cl__grid__media-list-wrapper--press')
})();

let userChangeLangByClick;

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


    let filterAlleTagsClick = document.querySelectorAll('.media-filter--pr-year .media-filter__item');
    filterAlleTagsClick[0].click();
    filterAlleTagsClick[0].click();

    function apperMedia() {
        let mediaWrapperEl = document.querySelector('#media-list-wrapper--op');
        mediaWrapperEl.classList.remove('media-list-wrapper--op--0');
    }

    setTimeout(apperMedia, 500);
    setTimeout(translateDateToGerman, 400);
    setTimeout(pagOnClickScroll, 600);
}

function listenToSwitcher() {
    let weGlotSwitcherEl = document.querySelector('.dropdown-toggle--header--lang');
    weGlotSwitcherEl.addEventListener('mousedown', function () {
        userChangeLangByClick = true;
    });
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
    let statesListInput = document.querySelector('#states__newsletter-ab');
    let stateTriggerShow = document.querySelector('.o__input-countries-wrapper__1');
    let stateTriggerClose = document.querySelector('.c__input-countries-wrapper__1');

    countryListInput.addEventListener('change', function () {
        if (this.value == 'Deutschland') {
            stateTriggerShow.click();
            statesListInput.setAttribute('required', '');
        } else {
            stateTriggerClose.click();
            statesListInput.removeAttribute('required');
        }
    });
}

finSweetStartPaginator();

//function that will be executed after the paginator is loaded
let pagStatus = 0;

function testFun() {
    if (pagStatus < 1) {
        // console.log('lets start ***finSweet');

        Weglot.initialize({
            api_key: 'wg_a06f3a7b6acb04572ef530639d3aa00a6'
        });
        setTimeout(hideLangItems, 1000);
        setTimeout(doFilterButtons, 1050);
        setTimeout(startFinsweetFilter, 1100);
        setTimeout(listenToSwitcher, 1150);
    }
    pagStatus = pagStatus + 1;
    // console.log('пагинатор сформировался');
}

let pagTimer;
//at the beginning of the function pagOs -> clear the timer, if there was one, and start it again
function pagObs() {
    clearTimeout(pagTimer);
    pagTimer = setTimeout(testFun, 600);
}
//start tracking the container with the paginator, it is important for us to understand when it changes
const targetNode = document.querySelector(".pagination-container");
const observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}
//Here we specify the function that will be run whenever the tree changes
const observer = new MutationObserver(pagObs);
observer.observe(targetNode, observerOptions);
//______________________________________________________________________________

//After changing the language - check if the change was triggered by a user or automatically, if a user - reload the page
Weglot.on("languageChanged", function () {
    if (userChangeLangByClick == true) {
        document.location.reload();
    }
    userChangeLangByClick = false;
})

//after starting weGlot - we ask to run finsweet after 1 second, we only do this here because initialization always happens and the language change does not always
Weglot.on("initialized", function () {
    contactPageStart();
})

