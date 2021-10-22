//menu scroll on/off
let menuButtonEl = document.querySelector('.menu-button');
let htmlAndBody = document.querySelectorAll('html, body');

menuButtonEl.addEventListener('click', function () {
    htmlAndBody.forEach(bred => {
        bred.classList.toggle('menu-fixed');
    });
});

if (window.innerWidth > 991) {
    htmlAndBody.forEach(bred => {
        bred.classList.remove('menu-fixed');
    });
}

window.addEventListener("resize", function name() {
    if (window.innerWidth > 991) {
        htmlAndBody.forEach(bred => {
            bred.classList.remove('menu-fixed');
        });
    }
});

