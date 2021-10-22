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
