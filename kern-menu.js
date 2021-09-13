let navTriggerOpen = document.querySelector('.nav-permanent__open');
let navTriggerClose = document.querySelector('.nav-permanent__close');

let navTriggerOpen1 = document.querySelector('.nav1__open');
let navTriggerOpen2 = document.querySelector('.nav2__open');
let navTriggerOpen3 = document.querySelector('.nav3__open');

let navTriggerClose1 = document.querySelector('.nav1__close');
let navTriggerClose2 = document.querySelector('.nav2__close');
let navTriggerClose3 = document.querySelector('.nav3__close');

let allSubMenus = document.querySelectorAll('.header__pc-menu--sub');
let headerBorder = document.querySelector('.header-white-border');
let permanentPlaceholder = document.querySelector('.header__pc-menu--permanent');
let allNavIndicators = document.querySelectorAll('.current-nav-indicator');
let pageTitle = document.querySelector('.nav--page-title');
let navAuftragsfertigung = document.querySelector('.nav--auftragsfertigung');
let allNavs = document.querySelectorAll('.nav--slide');
let allCloseTriggers = document.querySelectorAll('.close-trigger');
let permanentHeader = document.querySelector('.section--header-2inner__permanent');
let header = document.querySelector('.section--header');
let headerDiv = document.querySelector('.header');

let currentUrl = window.location.href;
let splittedUrl = currentUrl.split('/');
let nameOfPage = (splittedUrl[splittedUrl.length - 1]);


allSubMenus.forEach(subMenu => {
    let allSubMenuLinks = subMenu.querySelectorAll('.nav');
    let currentLinkIndicator = subMenu.previousSibling;
    currentLinkIndicator = currentLinkIndicator.textContent;
    allSubMenuLinks.forEach(link => {
        let currentLinkName = link.getAttribute('href');
        currentLinkName = currentLinkName.split('/');
        currentLinkName = (currentLinkName[currentLinkName.length - 1]);
        if (currentLinkIndicator == nameOfPage) {
            pageTitle.textContent = currentLinkIndicator;
        }
    });
});

allNavIndicators.forEach(currentIndicators => {
    if (currentIndicators.textContent == nameOfPage) {
        let currentNavBar = currentIndicators.nextSibling;
        let clonableNav = currentNavBar.cloneNode(true);
        permanentPlaceholder.append(clonableNav);

    }
});

let lastScrollTop = 0;




if (mainPages == undefined) {
    permanentHeader.classList.add('display-block');
} else {
    permanentHeader.classList.add('display-none');
}
if (headerBorder.classList.contains('opacity-zero') == true && mainPages == undefined) {
    headerBorder.classList.remove('opacity-zero');
}

allNavs.forEach((navSlide, id) => {
    navSlide.addEventListener('mouseover', function () {
        let currentOpenTriggerClassName = ('.nav' + (id + 1) + '__open')
        let currentCloseTriggerClassName = ('.nav' + (id + 1) + '__close')
        let currentOpenTrigger = document.querySelector(currentOpenTriggerClassName);

        if (headerBorder.classList.contains('opacity-zero') == true && mainPages == false) {
            headerBorder.classList.remove('opacity-zero');
        }

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

    if (headerBorder.classList.contains('opacity-zero') == false && mainPages == false) {
        headerBorder.classList.add('opacity-zero');
    }
});

header.addEventListener('mouseleave', function () {
    allCloseTriggers.forEach(closeTrigger => {
        closeTrigger.click();
    });
    navTriggerClose.click();

    if (headerBorder.classList.contains('opacity-zero') == false && mainPages == false) {
        headerBorder.classList.add('opacity-zero');
    }
});


function checkSizeOfHeader() {    
    if (scrollY >= 111) {
        if (headerDiv.classList.contains('small-header') == false) {
            headerDiv.classList.add('small-header');
        }
        pageTitle.classList.remove('opacity-zero');

    } else {
        if (headerDiv.classList.contains('small-header') == true) {
            headerDiv.classList.remove('small-header');
        }
        pageTitle.classList.add('opacity-zero');
    }
}

window.addEventListener('scroll', function () {
    checkSizeOfHeader();
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop) {
        if (scrollY >= 111 && mainPages == undefined && header.classList.contains('header-hide-y') == false) {
            header.classList.add('header-hide-y');
        }
        if (pageTitle.classList.contains('opacity-zero') == true) {
            pageTitle.classList.remove('opacity-zero');
        }
        if (headerBorder.classList.contains('opacity-zero') == false && mainPages == undefined) {
            headerBorder.classList.add('opacity-zero');
        }
    } else {
        if (scrollY >= 111 && mainPages == undefined && header.classList.contains('header-hide-y') == true) {
            header.classList.remove('header-hide-y');
        }
        if (pageTitle.classList.contains('opacity-zero') == false) {
            pageTitle.classList.add('opacity-zero');
        }
        if (headerBorder.classList.contains('opacity-zero') == true && mainPages == undefined) {
            headerBorder.classList.remove('opacity-zero');
        }
    }
    lastScrollTop = st <= 0 ? 0 : st; 
}, false);


checkSizeOfHeader();

//надо смотреть в адрес
//если адрес совпадает с ссылкой какого-нибудь меню 
//определять родитеьский элемент, а следом предыдущий текстовый
//если есть свопадение 