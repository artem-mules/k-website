let allCards = document.querySelectorAll('.cl-i__contact-card');
let allTriggersOpen = document.querySelectorAll('.cl-i__contact-card__triggers_o');
let allTriggersClose = document.querySelectorAll('.cl-i__contact-card__triggers_c');
let inputCountryList = document.querySelector('#country-list');
let inputStatesList = document.querySelector('#satetes');

function stateChecking() {
    if (inputCountryList.value == 'Deutschland') {
        allCards.forEach(card => {
            let currentCardData = card.querySelector('.data-el__contact-card-data');
            let currentCardStatesList = currentCardData.getAttribute('data-states-list');
            let currentStatesArray = currentCardStatesList.split(',');
            let currentCardTriggerOpen = card.querySelector('.cl-i__contact-card__triggers_o');
            let currentCardTriggerClose = card.querySelector('.cl-i__contact-card__triggers_c');
            if (inputStatesList.value != '' && currentStatesArray.includes(inputStatesList.value) && inputCountryList.value == 'Deutschland') {
                currentCardTriggerOpen.click();
            } else {
                currentCardTriggerClose.click();
            }
            if (inputStatesList.value == '') {
                allTriggersClose.forEach(trigger => {
                    trigger.click();
                });
            }
        });
    }
}

inputCountryList.addEventListener('change', function () {
    if (inputCountryList.value != 'Deutschland') {
        allCards.forEach(card => {
            let currentCardData = card.querySelector('.data-el__contact-card-data');
            let currentCardCounryList = currentCardData.getAttribute('data-countries-list');
            let currentCountryArray = currentCardCounryList.split(',');
            let currentCardTriggerOpen = card.querySelector('.cl-i__contact-card__triggers_o');
            let currentCardTriggerClose = card.querySelector('.cl-i__contact-card__triggers_c');
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
        stateChecking();
    }
});

inputStatesList.addEventListener('change', function () {
    stateChecking();
});

inputCountryList.addEventListener('change', function() {
    if (inputCountryList.value == '') {
        allTriggersClose.forEach(trigger => {
            trigger.click();
        });
        setTimeout(() => {
            allTriggersClose.forEach(trigger => {
                trigger.click();
            });
        }, 50);
    }
});