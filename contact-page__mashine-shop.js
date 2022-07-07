let mashineCountryList = document.querySelector('#Auftragsfertigung-Country-List');
let postalInput = document.querySelector('#Auftragsfertigung-Postleitzahl');
let trigger__openPostal = document.querySelector('.form-block-mashinen-shop .o__input-countries-wrapper__1');
let trigger__closePostal = document.querySelector('.form-block-mashinen-shop .c__input-countries-wrapper__1');
let allMachineContactsEmbed = document.querySelectorAll('.cl-i__contact-card-2 .data-el__contact-card-data');
let allCloseTriggers2 = document.querySelectorAll('.cl-i__contact-card-2 .cl-i__contact-card__triggers_c-new');

function closeAllContacts() {
    allCloseTriggers2.forEach(trigger => {
        trigger.click();
    });
}
//

mashineCountryList.addEventListener('change', function() {
    if (mashineCountryList.value == '') {
        closeAllContacts();
        trigger__closePostal.click();
    } else {
        if (mashineCountryList.value == 'Deutschland') {
            //this is Deutschland
            closeAllContacts();
            trigger__openPostal.click();
            document.addEventListener('keyup', function() {
                console.log(postalInput.value);
                allMachineContactsEmbed.forEach(embed => {
                    
                });
            });
        } else {
            //not Deutschland
            closeAllContacts();
            trigger__closePostal.click();

            let currentInputCountry = mashineCountryList.value;
            
            allMachineContactsEmbed.forEach(embed => {
                let currentCountryList = embed.getAttribute('data-countries-list-machine-shop').split(',');
                if (currentCountryList != '') {
                    if (currentCountryList[0] != '[not]') {
                        if (currentCountryList.includes(currentInputCountry)) {
                            let currentOpenTrigger = embed.parentElement.parentElement.querySelector('.cl-i__contact-card__triggers_o-new').click();
                        }
                    } else {
                        if (currentCountryList.includes(currentInputCountry) == false) {
                            let currentOpenTrigger = embed.parentElement.parentElement.querySelector('.cl-i__contact-card__triggers_o-new').click();
                        }
                    }
                }
            });
        }
    }
});

