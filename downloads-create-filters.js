function createFilter() {
    let allSectionsCategories = document.querySelectorAll('p.h2__list-download');
    let dropAppendParent = document.querySelector('.branchen-menu__list');

    allSectionsCategories.forEach(element => {
        if (element.textContent != 'Heading') {
            element.closest('.section').setAttribute('id', element.textContent.toLowerCase());
            let clonableDropItem = document.querySelector('.w-dropdown-link').cloneNode(true);
            clonableDropItem.classList.remove('h5__branchen-menu--hidden');
            clonableDropItem.textContent = element.textContent;
            let dropItemNewHref = ('#' + element.textContent)
            clonableDropItem.setAttribute('href', dropItemNewHref);
            dropAppendParent.append(clonableDropItem);
        }
    });
}

createFilter();



//пряем ausbildung
let ausbildunSection = document.querySelector('.section-de');

function hideAus() {

    if (Weglot.getCurrentLang() == 'en') {
        ausbildunSection.classList.add('hide-element');
    } else {
        ausbildunSection.classList.remove('hide-element');
    }
}

Weglot.on("initialized", function () {
    hideAus();
})

Weglot.on("languageChanged", function () {
    hideAus();
})