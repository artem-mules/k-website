let mashineCountryList = document.querySelector('#country-list-kontaktieren');
let trigger__openPostal = document.querySelector('.form-block-mashinen-shop .o__input-countries-wrapper__1');
let trigger__closePostal = document.querySelector('.form-block-mashinen-shop .c__input-countries-wrapper__1');
let allMachineContactsEmbed = document.querySelectorAll('.cl-i__contact-card-2 .data-el__contact-card-data');
let exceptionCountriesList = new Array();
let allCloseTriggers2 = document.querySelectorAll('.cl-i__contact-card-2 .cl-i__contact-card__triggers_c-new');

function closeAllContacts() {
    allCloseTriggers2.forEach(trigger => {
        trigger.click();
    });
}

allMachineContactsEmbed.forEach(contactEmbedMashines => {
    if (contactEmbedMashines.getAttribute('data-country-list-not-germany-exception') != '') {
        let this__listOfException = contactEmbedMashines.getAttribute('data-country-list-not-germany-exception').split(',');
        this__listOfException.forEach(exceptionCountry => {
            if (exceptionCountriesList.includes(exceptionCountry) == false) {
                exceptionCountriesList.push(exceptionCountry)
            }
        });
    }
});

function showAllExceptionContacts() {
    allMachineContactsEmbed.forEach(embed => {
        let this__listOfException = embed.getAttribute('data-country-list-not-germany-exception').split(',');
    });
}


mashineCountryList.addEventListener('change', function() {
    console.log(mashineCountryList.value);
    if (mashineCountryList.value == '') {
        closeAllContacts();
        trigger__closePostal.click();
    } else {
        if (mashineCountryList.value == 'Deutschland') {
            //this is Deutschland
            closeAllContacts();
            trigger__openPostal.click();
        } else {
            //not Deutschland
            closeAllContacts();
            trigger__closePostal.click();
            if (exceptionCountriesList.includes(mashineCountryList.value)) {
                showAllExceptionContacts();
            } else {
                console.log('надо спрятать контакты для стран исключений');
            }
        }
    }
});

