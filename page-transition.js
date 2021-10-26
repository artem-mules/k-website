let allHrefOnThePage = document.querySelectorAll('a');

allHrefOnThePage.forEach(link => {
    link.addEventListener('click', function (event) {
        let currentHrefValue = link.getAttribute('href');

        if (link.getAttribute('href') != null && currentHrefValue.charAt(0) != '#') {
            event.preventDefault();
            function goToLink() {
                window.location = currentHrefValue;
            }
            setTimeout(goToLink, 1500);
        }
    });
});