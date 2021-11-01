//menu scroll on/off
let popUpOpenButtons = document.querySelectorAll('[popup=open]');
let popUpCloseButton = document.querySelector('[popup=close]');

popUpOpenButtons.forEach(button => {
    button.addEventListener('click', function () {
        htmlAndBody.forEach(bred => {
            bred.classList.add('menu-fixed');
        });
    });
});

popUpCloseButton.addEventListener('click', function () {
    htmlAndBody.forEach(bred => {
        bred.classList.remove('menu-fixed');
    });
});

//все ссылки в новой вкладке
let allLinksOnPage = document.querySelectorAll('a.cl-i__download-links__3-link-wrapper');
allLinksOnPage.forEach(a => {
    if (a.getAttribute('target') == null) {
        a.setAttribute('target', '_blank')
    }
});