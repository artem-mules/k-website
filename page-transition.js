let allHrefOnThePage = document.querySelectorAll('a');
let bodyOfThisPage = document.querySelector('body');

allHrefOnThePage.forEach(link => {
    link.addEventListener('click', function (event) {
        //___________________
        if (link.getAttribute('transition') != 'false') {
            event.preventDefault();
            if (link.classList.contains('cl-i__download-links__3-link-wrapper') && countryCode == 'US') {
                // console.log(link.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('id'));
                if (link.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('id') == 'auftragsfertigung' || link.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('id') == 'maschinen') {
                    if (localStorage.getItem('user') == null) {
                        // event.preventDefault();
                        formOpenTrigger.click();
                    } else {
                        let currentHrefValue = link.getAttribute('href');
                        if (link.getAttribute('target') == '_blank') {
                            window.open(currentHrefValue, '_blank').focus();
                        }
                    }
                } else {
                    let currentHrefValue = link.getAttribute('href');
                    if (link.getAttribute('target') == '_blank') {
                        window.open(currentHrefValue, '_blank').focus();
                    }
                }
            } else {
                let currentHrefValue = link.getAttribute('href');

                if (link.getAttribute('href') != null && currentHrefValue.charAt(0) != '#' && link.getAttribute('target') != '_blank') {
                    // event.preventDefault();
                    function goToLink() {
                        window.location = currentHrefValue;
                    }
                    setTimeout(goToLink, 500);
                    bodyOfThisPage.classList.add('body-transition');
                }
                if (link.getAttribute('target') == '_blank') {
                    window.open(currentHrefValue, '_blank').focus();
                }
            }
        }
        //___________________
    });
});