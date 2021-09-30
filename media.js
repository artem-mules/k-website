//Add actual buttons
function createActualCatButtons() {
    let pressFilterCategoryWrapper = document.querySelector('#press__media-filter-cat');
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



    pressFilterCategories.forEach(category => {
        let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
        clonableFiterButton.setAttribute('filter-by', category);
        clonableFiterButton.classList.add('filter-button-item');
        let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
        clonableFiterButtonP.textContent = category;
        pressFilterCategoryWrapper.append(clonableFiterButton);
    });
}

//_______________________________________________________________________________________________________________
//Add actual buttons
function createActualYearButtons() {
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

    pressFilterYears.forEach(category => {
        let clonableFiterButton = document.querySelector('.clonable-elements .media-filter__item').cloneNode(true);
        clonableFiterButton.setAttribute('filter-by', category);
        clonableFiterButton.classList.add('filter-button-item');
        let clonableFiterButtonP = clonableFiterButton.querySelector('.navigation');
        clonableFiterButtonP.textContent = category;
        pressFilterWrapperYear.append(clonableFiterButton);
    });
}

//actions that are better to perform at the end
//and system tags
let cardsAlleTags = document.querySelectorAll('.media-filter__item .navigation');
cardsAlleTags.forEach(alleTag => {
    if (alleTag.textContent != 'Alle' && alleTag.textContent != 'All' && alleTag.textContent != 'English' && alleTag.textContent != 'Deutsch' && alleTag.textContent != 'Germany') {
        let currentAlleTag = alleTag.parentElement;
        currentAlleTag.classList.remove('media-filter__item--cards');
    }
});



let fsComponent1;
let myFilters1;

let fsComponent2;
let myFilters2;

function finSweetStop() {

    fsComponent2.filter({
        filterArray: undefined,
        activeClass: undefined,
        animation: {
            enable: true
        }
    })

    fsComponent2 = undefined

    myFilters2 = undefined
}

function finSweetStart() {

    (function () {
        fsComponent2 = new FsLibrary('.cl__grid__media-list-wrapper--press')
        fsComponent2.combine()

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
function removeFilterButtons () {
    let allFilterButtons = document.querySelectorAll('.filter-button-item');
    allFilterButtons.forEach(fiterButton => {
        fiterButton.remove();
    });
}

function buttonsStarter() {
    removeFilterButtons();
    createActualYearButtons();
    createActualCatButtons();
}


Weglot.on("languageChanged", function () {
    // setTimeout(buttonsStarter, 1000);
    buttonsStarter();
    console.log('languageChanged');
})
Weglot.on("initialized", function () {
    // setTimeout(buttonsStarter, 1000);
    buttonsStarter();
    console.log('initialized');
})
//идея в том,чтобы создавать новые компоненты и элементы до бесконечности.
//идея перезагружать страницу (начать стои с неё, вдруг не зашквар)
//идея выяснить как удалить функцию из памяти
//попробовать удалить свою какую-то простую функцию, посмотреть что получится, может тогда удастся засунуть весь код библиотеки
//ответить на вопрос, почему после переключения языка фильтры прекращают переводиться

// setTimeout(finSweetStart, 100);

// Weglot.on("switchersReady", function (initialLanguage) {
//     console.log("the switchers are ready, I can tweak them")
//     let weGlotSwitcher = document.querySelectorAll('.wg-li');

//     weGlotSwitcher.forEach(switcher => {
//         switcher.addEventListener('mousedown', function () {
//             console.log('weglot is clicked!!!!!');
//             console.log(switcher.classList.contains('wgcurrent'));
//             if (switcher.classList.contains('wgcurrent') == false) {
//                 console.log('перезагружаем страницу');
                
//                 console.log('перезагрузили');
//                 function restartPageC() {
//                     document.location.reload();
//                 }
//                 setTimeout(restartPageC, 500);
//             }
//         });
//     });
// })


// //если перезагрузка ходит по кругу, то пусть эта функция начинает работать только спустя 3 секунды после загрзки страницы