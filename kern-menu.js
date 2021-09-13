let navTriggerOpen = document.querySelector('.nav-permanent__open');
let navTriggerClose = document.querySelector('.nav-permanent__close');

let navTriggerOpen1 = document.querySelector('.nav1__open');
let navTriggerOpen2 = document.querySelector('.nav2__open');
let navTriggerOpen3 = document.querySelector('.nav3__open');

let navTriggerClose1 = document.querySelector('.nav1__close');
let navTriggerClose2 = document.querySelector('.nav2__close');
let navTriggerClose3 = document.querySelector('.nav3__close');

let navAuftragsfertigung = document.querySelector('.nav--auftragsfertigung');
let allNavs = document.querySelectorAll('.nav--slide');
let allCloseTriggers = document.querySelectorAll('.close-trigger');
let permanentHeader = document.querySelector('.section--header-2inner__permanent');
let header = document.querySelector('.section--header');
let headerDiv = document.querySelector('.header');

let currentUrl = window.location.href;
let splittedUrl = currentUrl.split('/');
let nameOfPage = (splittedUrl[splittedUrl.length - 1]);

let mainPages;

if (nameOfPage == 'maschinen' || nameOfPage == 'unternehmen' || nameOfPage == 'karriere') {
    permanentHeader.classList.add('display-block');
    mainPages = true;
} else {
    permanentHeader.classList.add('display-none');
    mainPages = false;
}

allNavs.forEach((navSlide, id) => {
    navSlide.addEventListener('mouseover', function () {
        let currentOpenTriggerClassName = ('.nav' + (id + 1) + '__open')
        let currentCloseTriggerClassName = ('.nav' + (id + 1) + '__close')
        let currentOpenTrigger = document.querySelector(currentOpenTriggerClassName);

        allCloseTriggers.forEach(closeTrigger => {
            if (document.querySelector(currentCloseTriggerClassName) != closeTrigger) {
                closeTrigger.click();
            }
        });

        navTriggerOpen.click();
        currentOpenTrigger.click();

    });

});


navAuftragsfertigung.addEventListener('mouseover', function () {
    allCloseTriggers.forEach(closeTrigger => {
        closeTrigger.click();
    });
    navTriggerClose.click();
});

header.addEventListener('mouseleave', function () {
    allCloseTriggers.forEach(closeTrigger => {
        closeTrigger.click();
    });
    navTriggerClose.click();
});


function checkSizeOfHeader() {
    if (scrollY >= 111) {
        if (headerDiv.classList.contains('small-header') == false) {
            headerDiv.classList.add('small-header');
        }

        if (mainPages == true) {

            window.addEventListener("mousewheel", function (event) {
                if (event.wheelDelta >= 0) {
                    console.log('вверх');
                    header.classList.remove('header-hide-y');
                } else {
                    console.log('вниз');
                    header.classList.add('header-hide-y');
                }
            })
        }

    } else {
        if (headerDiv.classList.contains('small-header') == true) {
            headerDiv.classList.remove('small-header');
        }
    }
}

window.addEventListener('scroll', function () {
    checkSizeOfHeader();
});


checkSizeOfHeader();