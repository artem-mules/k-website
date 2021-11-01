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
        } else {
            //us branchen content
            let usaAttributeElements = document.querySelectorAll('[only-for-us]');
            usaAttributeElements.forEach(element => {
                if (element.getAttribute('only-for-us') == 'true') {
                    element.parentElement.parentElement.remove()
                }
            });
        }
    })
    .catch(err => { throw err });


    //home hero-video
//пряем ausbildung
function hideContent() {
    let enVideo = document.querySelector('[video-lang="en"]');
    let deVideo = document.querySelector('[video-lang="de"]');

    if (Weglot.getCurrentLang() == 'en') {
        deVideo.classList.add('hide-element');
        enVideo.classList.remove('hide-element');
    } else {
        deVideo.classList.remove('hide-element');
        enVideo.classList.add('hide-element');
    }
}

Weglot.on("initialized", function () {
    hideContent();
})

Weglot.on("languageChanged", function () {
    hideContent();
})