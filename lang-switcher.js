//lang switcher below :)
let headerLangSwitcher = document.querySelector('.dropdown-toggle--header--lang');

function refreshSwitcherValue() {
    if (Weglot.getCurrentLang() == 'de') {
        headerLangSwitcher.textContent = 'en';
    } else {
        headerLangSwitcher.textContent = 'de';
    }
}

function changeLangOnSwitcherClick() {
    if (Weglot.getCurrentLang() == 'de') {
        Weglot.switchTo('en');
    } else {
        Weglot.switchTo('de');
    }
}

headerLangSwitcher.addEventListener('click', changeLangOnSwitcherClick);

Weglot.on("initialized", refreshSwitcherValue)
Weglot.on("languageChanged", refreshSwitcherValue)