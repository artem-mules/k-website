let url = 'https://api.geoapify.com/v1/ipinfo?apiKey=35edb2debb9a4ee785f52b02f7127781';
let countryCode;

fetch(url)
    .then(res => res.json())
    .then((out) => {
        let countryObject = out;
        countryCode = countryObject.country.iso_code;

        if (countryCode == 'US') {
            
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