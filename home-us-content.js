let homeHiddenSection = document.querySelector('.section--home-us');
let currentCountry;

$.get("https://ipinfo.io", function (response) {
    currentCountry = response.country;

    if (currentCountry == 'US') {
        homeHiddenSection.classList.remove('section--home-us');
    }
}, "jsonp");