let countryInfo;
function contactPageStart() {
    let countyHiddenInput = document.querySelector('.input--selected-country');

    let popupMain = document.querySelector('.popup');
    let popup1 = document.querySelector('.pc__support-1');
    let popup2 = document.querySelector('.pc__support-2');
    let popup3 = document.querySelector('.pc__support-3');
    let popup4 = document.querySelector('.pc__support-4');
    let popup5 = document.querySelector('.pc__support-5');

    let popupTrigger1__open = document.querySelector('.open1');
    let popupTrigger1__close = document.querySelector('.close1');

    let popupTrigger2__open = document.querySelector('.open2');
    let popupTrigger2__close = document.querySelector('.close2');

    let popupTrigger3__open = document.querySelector('.open3');
    let popupTrigger3__close = document.querySelector('.close3');

    let popupTrigger4__open = document.querySelector('.open4');
    let popupTrigger4__close = document.querySelector('.close4');

    let popupTrigger5__open = document.querySelector('.open5');
    let popupTrigger5__close = document.querySelector('.close5');

    let buttonVetrieb = document.querySelector('#button-vetrieb');
    let buttonHandelsvertreter = document.querySelector('#button-handelsvertreter');
    let buttonKontaktieren = document.querySelector('#button-kontaktieren');
    let buttonKontaktierenNew = document.querySelector('#button-kontaktieren-new');

    let buttonsContries = document.querySelectorAll('.buttons--countries');

    let buttonClosePopup = document.querySelector('.popup__close');


    //----------------------------------------------------------

    buttonVetrieb.addEventListener('click', function () {
        popupTrigger3__open.click();
        popupTrigger3__open.nextSibling.classList.add('current-close');
    });

    buttonHandelsvertreter.addEventListener('click', function () {
        popupTrigger4__open.click();
        popupTrigger4__open.nextSibling.classList.add('current-close');
    });

    buttonKontaktieren.addEventListener('click', function () {
        popupTrigger1__open.click();
        popupTrigger1__open.nextSibling.classList.add('current-close');
    });

    buttonKontaktierenNew.addEventListener('click', function () {
        popupTrigger5__open.click();
        popupTrigger5__open.nextSibling.classList.add('current-close');
    });

    buttonsContries.forEach(btn => {
        btn.addEventListener('click', function () {
            popupTrigger2__open.click();
            popupTrigger2__open.nextSibling.classList.add('current-close');
            countyHiddenInput.value = btn.getAttribute('support-county');
        });
    });

    buttonClosePopup.addEventListener('click', function () {
        let arrayCurrentCloseTrigger = document.querySelectorAll('.current-close');
        arrayCurrentCloseTrigger.forEach(element => {
            element.click();
            element.classList.remove('current-close');
        });
    });

    //____________________________________________________________________________________
    //countrues and sates_________________________________________________________________
    let countryListInput = document.querySelector('#country-list');
    let statesListInput = document.querySelector('.input-states');
    let stateTriggerShow = document.querySelector('.o__input-countries-wrapper__1');
    let stateTriggerClose = document.querySelector('.c__input-countries-wrapper__1');

    countryListInput.addEventListener('change', function () {
        if (this.value == 'Deutschland') {
            stateTriggerShow.click();
            statesListInput.setAttribute('required', '');
        } else {
            stateTriggerClose.click();
            statesListInput.removeAttribute('required');
        }
    });


    //____________________________________________________________________________________
    //Alphabet_________________________________________________________________
    let countriesItems = document.querySelectorAll('.hand-string--name');
    let countriesItemsMobile = document.querySelectorAll('.cl-i__countries');
    let itemsForSort = new (Array);

    countriesItems.forEach(item => {
        let currentCountryName = item.querySelector('.hand-string__p--country').textContent;
        itemsForSort.push(currentCountryName);
    });

    itemsForSort.sort();

    itemsForSort.forEach((name, index) => {
        countriesItems.forEach(item => {
            let currentCountryName = item.querySelector('.hand-string__p--country').textContent;
            if (currentCountryName == name) {
                item.style.order == index;
            }
        });

        countriesItemsMobile.forEach(item => {
            let currentCountryName = item.querySelector('.h6__cl-i__countries__header').textContent;
            if (currentCountryName == name) {
                item.style.order == index;
            }
        });
    });


    //____________________________________________________________________________________
    //PhoneCountry_________________________________________________________________
    var input = document.querySelectorAll(".work-phone");
    input.forEach(element => {
        window.intlTelInput(element, {
            initialCountry: "auto",
            nationalMode: false,
            autoHideDialCode: false,
            geoIpLookup: function (callback) {
                $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "us";
                    callback(countryCode);
                    countryInfo = countryCode;
                });
            },
            utilsScript: "https://intl-tel-input.com/node_modules/intl-tel-input/build/js/utils.js?1613236686837"
        });
    });


    //____________________________________________________________________________________
    //SelectWidth_________________________________________________________________

    let inputTrigger = document.querySelectorAll('.iti__selected-flag');
    inputTrigger.forEach(element => {
        element.addEventListener('click', function () {
            let parentEl = element.parentElement;
            let inputForWidth = parentEl.nextSibling;

            let style = getComputedStyle(inputForWidth);
            let width = parseInt(style.width);
            width = (width + 'px')
            let countriesListTel = document.querySelectorAll('.iti__country-list');
            countriesListTel.forEach(list => {
                list.style.width = width;
            });
        });
    });


}

contactPageStart();
Weglot.on("languageChanged", function () {
    contactPageStart();
})


//open support kontaktieren popup
if (window.location.hash == '#support-kontaktieren') {
    document.querySelector('#button-kontaktieren').click();
    window.location.hash = '#support-kontaktieren';
}