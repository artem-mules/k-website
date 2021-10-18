let homeHiddenSection = document.querySelector('.section--home-us');
let url = 'https://api.geoapify.com/v1/ipinfo?apiKey=35edb2debb9a4ee785f52b02f7127781';
let countryCode;

fetch(url)
    .then(res => res.json())
    .then((out) => {
        let countryObject = out;
        countryCode = countryObject.country.iso_code;

        if (countryCode == 'US') {
            homeHiddenSection.classList.remove('section--home-us');
        }
    })
    .catch(err => { throw err });