//menu scroll on/off
let menuButtonEl = document.querySelector('.menu-button');
let htmlAndBody = document.querySelectorAll('html, body');
let menuSection = document.querySelector('.section.section--header');

menuButtonEl.addEventListener('click', function () {
    htmlAndBody.forEach(bred => {
        bred.classList.toggle('menu-fixed');
    });
    menuSection.classList.toggle('fix-bug__menu');
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


//menu transform bug fix


