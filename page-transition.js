let allHrefOnThePage = document.querySelectorAll('a');
let bodyOfThisPage = document.querySelector('body');

allHrefOnThePage.forEach(link => {
    link.addEventListener('click', function (event) {
        let currentHrefValue = link.getAttribute('href');

        if (link.getAttribute('href') != null && currentHrefValue.charAt(0) != '#' && link.getAttribute('target') != '_blank') {
            event.preventDefault();
            function goToLink() {
                window.location = currentHrefValue;
            }
            setTimeout(goToLink, 500);
            bodyOfThisPage.classList.add('body-transition');
        } else {
            window.open(currentHrefValue, '_blank').focus();
        }
    });
});