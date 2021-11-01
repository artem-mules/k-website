let arrayCatefories = document.querySelectorAll('.cl-i__cad-cat');
let arrayDownloadElements = document.querySelectorAll('.cl-i__cad-downloads');
let arrayDownloadObjects = new Array();

arrayDownloadElements.forEach(el => {
    let downloadObject = {
        sap: el.querySelector('.sap__cl-i__cad-downloads').textContent,
        description: el.querySelector('.description__cl-i__cad-downloads').textContent,
        link: el.querySelector('.link__cl-i__cad-downloads').getAttribute('href'),
        category: el.querySelector('.category__cl-i__cad-downloads').textContent
    };

    arrayDownloadObjects.push(downloadObject);
});
arrayCatefories.forEach(el => {
    let cadAccordion = document.querySelector('.cl__download-links--cad');
    let clonableAccordionItem = document.querySelector('.cl-i__download-links--cad').cloneNode(true);
    let currentCategoryCat = el.querySelector('.name__cl-i__cad-cat').textContent;
    clonableAccordionItem.querySelector('.h6__cl-i__download-links--cad__1').textContent = currentCategoryCat;
    clonableAccordionItem.classList.remove('cl-i__download-links--cad--hidden');
    cadAccordion.append(clonableAccordionItem);
});


let renderedAccordionItems = document.querySelectorAll('.cl-i__download-links--cad');

renderedAccordionItems.forEach(el => {
    let currentCategory = el.querySelector('.h6__cl-i__download-links--cad__1').textContent;
    if (currentCategory == 'Category name') {
        el.remove();
    }
    let currentAppendParent = el.querySelector('.table-row__list');
    arrayDownloadObjects.forEach(object => {
        if (object.category == currentCategory) {
            let clonableLink = document.querySelector('.table-row__content--link').cloneNode(true);
            clonableLink.querySelector('.sap__h6__table-row__content').textContent = object.sap;
            clonableLink.querySelector('.description__h6__table-row__content').textContent = object.description;
            clonableLink.querySelector('.cl-i__download-links__3-link-wrapper--single-cad').setAttribute('href', object.link);
            clonableLink.classList.remove('table-row__content--link--hidden');
            currentAppendParent.append(clonableLink);
        }
    });
});


let orderSections = document.querySelectorAll('.section--download');
let documenyHtml = document.querySelector('html');
orderSections.forEach(el => {
    currentSectionCat = el.querySelector('.h2__list-download').textContent;
    if (currentSectionCat == 'AGB') {
        el.style.order = '99';
    }

    if (currentSectionCat == 'Ausbildung') {
        el.classList.add('section-de');
    }
});