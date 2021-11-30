let allCards = document.querySelectorAll('.cl-i__contact-card');
let allTriggersOpen = document.querySelectorAll('.cl-i__contact-card__triggers_o');
let allTriggersClose = document.querySelectorAll('.cl-i__contact-card__triggers_c');
let inputCountryList = document.querySelector('#country-list');
let inputStatesList = document.querySelector('#satetes');

inputCountryList.addEventListener('change', function() {
    if (inputCountryList.value != 'Deutschland') {
        //делаем перебор всех карточек, и заглядываем в аттрибуты
        allCards.forEach(card => {
            let currentCardData = card.querySelector('.data-el__contact-card-data');
            let currentCardCounryList = currentCardData.getAttribute('data-countries-list');
            let currentCountryArray = currentCardCounryList.split(',');
            let currentCardTriggerOpen = card.querySelector('.cl-i__contact-card__triggers_o');
            let currentCardTriggerClose = card.querySelector('.cl-i__contact-card__triggers_c');
            // console.log(currentCountryArray);
            // console.log(inputCountryList.value);
            if (currentCountryArray.includes(inputCountryList.value)) {
                currentCardTriggerOpen.click();
            } else {
                currentCardTriggerClose.click();
            }
        });
    } else {
        allTriggersClose.forEach(trigger => {
            trigger.click();
        });
    }
});
