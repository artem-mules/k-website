let titleArray = document.querySelectorAll('.text__cl-i-hidden-cat');
let regularTitleArray = new Array();

titleArray.forEach(currentTitle => {
    if (regularTitleArray.length == 0) {
        let currentTitleValue = currentTitle.textContent;
        regularTitleArray.push(currentTitleValue);
    } else {
        let currentTitleValue = currentTitle.textContent;
        if (currentTitleValue != regularTitleArray[regularTitleArray.length - 1]) {
            regularTitleArray.push(currentTitleValue);
        }
    }
});

// ------------------------------------------------------------------------

regularTitleArray.forEach(currentTitle => {
    clonableElement = document.querySelector('.section--download--hidden');
    let clone = clonableElement.cloneNode(true);
    clone.classList.remove('section--download--hidden');

    let sectionTitle = clone.querySelector('.h2');
    sectionTitle.textContent = currentTitle;

    let sectionsCardsCategoryLabels = clone.querySelectorAll('.cl-i__download-links__hidden-category');
    sectionsCardsCategoryLabels.forEach(cardCategory => {
        if (cardCategory.textContent != currentTitle) {
            let parentCard = cardCategory.closest('.cl-i__download-links');
            parentCard.remove();
        }
    });


    clonableElement.after(clone);
});


// ------------------------------------------------------------------------
let cardsArray = document.querySelectorAll('.cl-i__download-links');
cardsArray.forEach(card => {
    let listOfLang = card.querySelectorAll('.cl-i__download-links__3');
    let dropdownButton = card.querySelector('.cl-i__download-links__lang-button-dropdown');
    let singleButton = card.querySelector('.cl-i__download-links__3-link-wrapper--single');
    let singleButtonParagraph = singleButton.querySelector('p');
    let singleButtonText = listOfLang[0].textContent;
    let listOfLangWrapper = listOfLang[0];
    let listOfLangHref = listOfLangWrapper.querySelector('a');

    if (listOfLang.length == 1) {
        singleButton.style.display = 'flex';
        dropdownButton.style.display = 'none';

        singleButtonParagraph.textContent = singleButtonText;
        singleButton.setAttribute('href', listOfLangHref.getAttribute('href'));
    }
});