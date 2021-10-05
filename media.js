(function () {
    fsComponent2 = new FsLibrary('.cl__grid__media-list-wrapper--press')
})();

let userChangeLangByClick;

//Add actual buttons
function createActualCatButtons() {
    let pressFilterCategoryWrapper = document.querySelector('#press__media-filter-cat');
    let pressFilterCategories = new (Array);
    let pressListTagsPlaceholders = document.querySelectorAll('.tags-src__category');

    //make an array of categories and sort it
    pressListTagsPlaceholders.forEach(placeholder => {
        stepPlaceholderValue = placeholder.textContent;
        if (pressFilterCategories.includes(stepPlaceholderValue) == false) {
            pressFilterCategories.push(stepPlaceholderValue);
        }
    });

    pressFilterCategories.sort();

    pressFilterCategories.forEach(category => {
        let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
        clonableFiterButton.setAttribute('filter-by', category);
        clonableFiterButton.classList.add('filter-button-item');
        clonableFiterButton.classList.remove('media-filter__item--cards');
        let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
        clonableFiterButtonP.textContent = category;
        pressFilterCategoryWrapper.append(clonableFiterButton);
    });
}

//Add actual buttons
function createActualYearButtons() {
    let yearPlaceholders = document.querySelectorAll('.tags-src__year');
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
    pressFilterYears.reverse();

    pressFilterYears.forEach(category => {
        let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
        clonableFiterButton.setAttribute('filter-by', category);
        clonableFiterButton.classList.add('filter-button-item');
        clonableFiterButton.classList.remove('media-filter__item--cards');
        let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
        clonableFiterButtonP.textContent = category;
        pressFilterWrapperYear.append(clonableFiterButton);
    });
}

//actions that are better to perform at the end
//hide system tags in cads
function hideSystemTags() {
    let cardsAlleTags = document.querySelectorAll('.press-wrapper .media-filter__item .navigation');
    cardsAlleTags.forEach(alleTag => {
        if (alleTag.textContent != 'English' && alleTag.textContent != 'Deutsch' && alleTag.textContent != 'German') {
            let currentAlleTag = alleTag.parentElement;
            currentAlleTag.classList.remove('media-filter__item--cards');
        }
    });
}

//finsweet staffs
function finSweetStartFilter() {

    (function () {
        myFilters2 = [{
            filterWrapper: '.media-filter--pr-cat',
            filterType: 'multi'
        },
        {
            filterWrapper: '.media-filter--pr-year',
            filterType: 'multi'
        }
        ]

        fsComponent2.filter({
            filterArray: myFilters2,
            activeClass: 'w--current',
            animation: {
                enable: true
            }
        })

    })();

}

function finSweetStartPaginator() {

    (function () {
        /* LOAD MORE COMPONENT */

        // run loadmore on our instance
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

//the delete function is needed, when restarting the language, so that it does not create a dublicata of buttons
function removeFilterButtons() {
    let allFilterButtons = document.querySelectorAll('.filter-button-item');
    allFilterButtons.forEach(fiterButton => {
        fiterButton.remove();
    });
}

//a general function that calls all functionality except finsweet
function buttonsStarter() {
    removeFilterButtons();
    createActualYearButtons();
    createActualCatButtons();
    hideSystemTags();
}

//After changing the language - check if the change was triggered by a user or automatically, if a user - reload the page
Weglot.on("languageChanged", function () {
    buttonsStarter();
    if (userChangeLangByClick == true) {
        document.location.reload();
    }
    userChangeLangByClick = false;
})

//after starting weGlot - we ask to run finsweet after 1 second, we only do this here because initialization always happens and the language change does not always
Weglot.on("initialized", function () {
    buttonsStarter();
})

finSweetStartPaginator();

function listenToSwitcher() {
    let weGlotSwitcherEl = document.querySelector('li.wg-li');
    weGlotSwitcherEl.addEventListener('mousedown', function () {
        userChangeLangByClick = true;
    });
}


//function that will be executed after the paginator is loaded
let pagStatus = 0;

function testFun() {
    if (pagStatus < 1) {
        console.log('lets start ***finSweet');

        Weglot.initialize({
            api_key: 'wg_a06f3a7b6acb04572ef530639d3aa00a6'
        });
        setTimeout(finSweetStartFilter, 1000);
        setTimeout(listenToSwitcher, 1000);
    }
    pagStatus = pagStatus + 1;
}

let pagTimer;
//at the beginning of the function pagOs -> clear the timer, if there was one, and start it again
function pagObs() {
    clearTimeout(pagTimer);
    pagTimer = setTimeout(testFun, 200);
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