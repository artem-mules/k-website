Weglot.on("switchersReady", function (initialLanguage) {
    langMagic();
})
Weglot.on("languageChanged", function (newLang, prevLang) {
    langMagic();
})


function langMagic() {

    let allAllLangEmbed = document.querySelectorAll('.lang-embed');
    allAllLangEmbed.forEach(langEmbed => {
        langEmbed.parentElement.parentElement.classList.remove('hide');
        document.querySelector('.no-cards-message').classList.add('no-cards-message--hide');

        let currentLang = langEmbed.getAttribute('data-lang-embed');
        if (Weglot.getCurrentLang() == 'en') {
            if (currentLang == 'Deutsch') {
                langEmbed.parentElement.parentElement.classList.add('hide');
            }
        } else {
            if (currentLang == 'English' || currentLang == 'Andere Sprachen') {
                langEmbed.parentElement.parentElement.classList.add('hide');
            }
        }
    });

    let allCards = document.querySelectorAll('.collection-list-item');
    let allHiddenCards = document.querySelectorAll('.clw__grid__media-list-wrapper .hide');
    if (allCards.length == allHiddenCards.length) {
        document.querySelector('.no-cards-message').classList.remove('no-cards-message--hide');
    }

}
