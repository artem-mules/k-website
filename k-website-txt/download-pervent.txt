// let url = 'https://api.geoapify.com/v1/ipinfo?apiKey=35edb2debb9a4ee785f52b02f7127781';
// let countryCode;
// let usSections = document.querySelectorAll('#maschinen, #auftragsfertigung');
// let usLinks = document.querySelectorAll('a.cl-i__download-links__3-link-wrapper.w-inline-block');
// let formOpenTrigger = document.querySelector('.open3');
// let formCloseTrigger = document.querySelector('.close3');
// let formCloseButton = document.querySelector('.popup__close');
// let formUsaUser = document.querySelector('.form-block__form--download');

// formCloseButton.addEventListener('click', function() {
//     formCloseTrigger.click();
// });

// formUsaUser.addEventListener('submit', function() {
//     localStorage.setItem('user', 'authorized')
// });



// function userUsaCheck() {
//     usLinks.forEach(downloadLink => {
//         downloadLink.addEventListener('click', function (event) {
//             if (localStorage.getItem('user') == null) {
//                 event.preventDefault();
//                 formOpenTrigger.click();
//             }
//         });
        
//     });
// }

// fetch(url)
//     .then(res => res.json())
//     .then((out) => {
//         let countryObject = out;
//         countryCode = countryObject.country.iso_code;

//         if (countryCode == 'US') {
//             userUsaCheck();
//         }
//     })
//     .catch(err => { throw err });



let url = 'https://api.geoapify.com/v1/ipinfo?apiKey=35edb2debb9a4ee785f52b02f7127781';
let countryCode;
let usSections = document.querySelectorAll('#maschinen, #auftragsfertigung');
let usLinks = document.querySelectorAll('a.cl-i__download-links__3-link-wrapper.w-inline-block');
let formOpenTrigger = document.querySelector('.open3');
let formCloseTrigger = document.querySelector('.close3');
let formCloseButton = document.querySelector('.popup__close');
let formUsaUser = document.querySelector('.form-block__form--download');
let usaStatus;

formCloseButton.addEventListener('click', function () {
    formCloseTrigger.click();
});

formUsaUser.addEventListener('submit', function () {
    localStorage.setItem('user', 'authorized')
});

fetch(url)
    .then(res => res.json())
    .then((out) => {
        let countryObject = out;
        countryCode = countryObject.country.iso_code;

        if (countryCode == 'US') {
            usaStatus = true;
        }
    })
    .catch(err => { throw err });