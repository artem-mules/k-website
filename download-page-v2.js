let collectionItems = document.querySelectorAll('.cl-i__download-data');
let pageWrapper = document.querySelector('.page-wrapper');
let sectionsList = new (Array);
let sectionsTask = new (Array);
let sectionsListCad = new (Array);
let sectionsTaskCad = new (Array);
let downloadsList = new (Array);


//создаём массив из объектов dlownlads
collectionItems.forEach(collectionItem => {
    let dataSrc = collectionItem.querySelector('.data-src');
    let dataSectionText = collectionItem.querySelector('.data-section-name');
    let dataSectionTextCad = collectionItem.querySelector('.data-section-name-card');
    let dataFileNameText = collectionItem.querySelector('.data-file-name');
    let dataFileSapText = collectionItem.querySelector('.data-sap-number');
    let dataFileSapDescriptionText = collectionItem.querySelector('.data-sap-description');
    let downloadLinkElements = collectionItem.querySelectorAll('[file-download-link]');
    let downloadLinkArray = new(Array);
    let typeOfLink;
    downloadLinkElements.forEach(link => {
        if (link.getAttribute('href') != '#') {
            downloadLinkArray.push(link.getAttribute('href'));
        }
    });
    if (downloadLinkArray.length == 1) {
        typeOfLink = 'download--single'
    }
    if (downloadLinkArray.length > 1) {
        typeOfLink = 'download--multilang'
    }
    if (downloadLinkArray.length == 0) {
        typeOfLink = 'download--cad'
    }
    let sectionModel = {
        // linkDe: collectionItem.querySelector('.de').getAttribute('href'),
        // linkEn: collectionItem.querySelector('.en').getAttribute('href'),
        // linkCh: collectionItem.querySelector('.ch').getAttribute('href'),
        // linkFr: collectionItem.querySelector('.fr').getAttribute('href'),
        // linkIt: collectionItem.querySelector('.it').getAttribute('href'),
        // linkCad: collectionItem.querySelector('.cad').getAttribute('href'),
        linkDe: collectionItem.querySelector('.de'),
        linkEn: collectionItem.querySelector('.en'),
        linkCh: collectionItem.querySelector('.ch'),
        linkFr: collectionItem.querySelector('.fr'),
        linkIt: collectionItem.querySelector('.it'),
        linkCad: collectionItem.querySelector('.cad').getAttribute('href'),
        sectionOrder: dataSrc.getAttribute('data-section-name').split('/')[0],
        sectionOrderCad: dataSrc.getAttribute('data-cad-category').split('/')[0],
        sectionId: dataSrc.getAttribute('data-section-name').split('/')[1].toLowerCase(),
        sectionName: dataSectionText.textContent.split('/')[1],
        sectionIdCad: dataSrc.getAttribute('data-cad-category').split('/')[1],
        sectionNameCad: dataSectionTextCad.textContent.split('/')[1],
        fileName: dataFileNameText.textContent.split('@')[1],
        sapNumberCad: dataFileSapText.textContent,
        sectionDescription: dataSectionText.textContent.split('/')[2],
        sapDescription: dataFileSapDescriptionText.textContent,
        langDisplayOnly: dataSrc.getAttribute('data-section-name').split('/')[3],
        authFromUsa: dataSrc.getAttribute('data-section-name').split('/')[4],
        typeOfRow: typeOfLink
    }
    downloadsList.push(sectionModel);
});

//создаем массив из имён секций
downloadsList.forEach(downloadItem => {
    if (sectionsList.includes(downloadItem.sectionId) == false) {
        sectionsList.push(downloadItem.sectionId);
        sectionsTask.push(downloadItem);
    }
});

//создаём массив из имён кад секций
downloadsList.forEach(downloadItem => {
    if (sectionsListCad.includes(downloadItem.sectionNameCad) == false && downloadItem.sectionId == 'cad') {
        sectionsListCad.push(downloadItem.sectionNameCad);
        sectionsTaskCad.push(downloadItem);
    }
});


//рендерим секции 
//надо сразу задавать аттрибуты секциям (проверка пароля, ордер, язык для оторажения и пр)
sectionsTask.forEach(sectionObject => {
    let clonableSection = document.querySelector('.section--placeholder').cloneNode(true);
    let currentSectionSubtitleText = clonableSection.querySelector('.subtitle--cad');
    clonableSection.classList.remove('section--placeholder');
    clonableSection.classList.add('section--download-page');
    clonableSection.setAttribute('id', sectionObject.sectionId);
    clonableSection.style.order = sectionObject.sectionOrder;
    let currentRows = clonableSection.querySelector('.downloads-rows-wrapper').querySelectorAll('*');
    let currentSectionNameText = clonableSection.querySelector('.h2--download-section');
    currentSectionNameText.textContent = sectionObject.sectionName;

    if (sectionObject.sectionId == 'CAD') {
        currentSectionSubtitleText.textContent = sectionObject.sectionDescription;
    } else {
        currentSectionSubtitleText.remove();
    }

    if (sectionObject.langDisplayOnly == 'de') {
        clonableSection.setAttribute('lang-display-only', sectionObject.langDisplayOnly);        
    }

    if (sectionObject.langDisplayOnly == 'en') {
        clonableSection.setAttribute('lang-display-only', sectionObject.langDisplayOnly);    
    }

    if (sectionObject.authFromUsa == 'true') {
        clonableSection.setAttribute('auth-from-usa', sectionObject.authFromUsa);
    }



    currentRows.forEach(row => {
        row.remove();
    });
    pageWrapper.append(clonableSection);
});


//попробуем подкатегории тут создать для када
let cadRowsWrapper = document.querySelector('#cad .downloads-rows-wrapper');

sectionsTaskCad.forEach(cadTaskObject => {
    let currentClonableRow = document.querySelector('.downloads-row-item--cad').cloneNode(true);
    let gonnaDelete = currentClonableRow.querySelector('.cad-row-grid--download-row--clone');
    gonnaDelete.remove();
    let currentCategoryPlaceholder = currentClonableRow.querySelector('.h6--downloads-row-item');
    currentCategoryPlaceholder.textContent = cadTaskObject.sectionNameCad;
    currentClonableRow.style.order = cadTaskObject.sectionOrderCad;
    let currentCadSectionId = cadTaskObject.sectionIdCad;
    currentCadSectionId = currentCadSectionId.toLowerCase();
    currentClonableRow.setAttribute('id', currentCadSectionId);
    cadRowsWrapper.append(currentClonableRow);
});


//теперь собираем все секции
let allRenderedSection = document.querySelectorAll('.section--download-page');

allRenderedSection.forEach(renderedSection => {
    currentSectionId = renderedSection.getAttribute('id');
    downloadsList.forEach(file => {
        if (file.sectionId == currentSectionId) {
            let currentRowsWrapper = renderedSection.querySelector('.downloads-rows-wrapper');

            if (file.typeOfRow == 'download--single') {
                let currentClonableRow = document.querySelector('.downloads-row-item--single').cloneNode(true);
                let currentFilenameEl = currentClonableRow.querySelector('.h6--downloads-row-item');
                let currentFileLink = currentClonableRow.querySelector('.downloads-row-item__link');
                
                let allObjectLinks = new (Array);
                allObjectLinks.push(file.linkDe.getAttribute('href'));
                allObjectLinks.push(file.linkEn.getAttribute('href'));
                allObjectLinks.push(file.linkFr.getAttribute('href'));
                allObjectLinks.push(file.linkIt.getAttribute('href'));
                allObjectLinks.push(file.linkCh.getAttribute('href'));

                allObjectLinks.forEach(link => {
                    if (link != '#') {
                        currentFileLink.setAttribute('href', link);
                    }
                });



                currentFilenameEl.textContent = file.fileName;
                currentRowsWrapper.append(currentClonableRow);


            }
            if (file.typeOfRow == 'download--multilang') {
                let currentClonableRow = document.querySelector('.downloads-row-item--multilang').cloneNode(true);
                let currentFilenameEl = currentClonableRow.querySelector('.h6--downloads-row-item');
                let currentLinksWrapper = currentClonableRow.querySelector('.downloads-row-item__list');

                let allElLinks = new (Array);
                allElLinks.push(file.linkDe);
                allElLinks.push(file.linkEn);
                allElLinks.push(file.linkFr);
                allElLinks.push(file.linkIt);
                allElLinks.push(file.linkCh);

                allElLinks.forEach(link => {
                    if (link.getAttribute('href') != '#') {
                        let currentClonableLink = currentClonableRow.querySelector('.downloads-row-item__link--lang').cloneNode(true);
                        let currentLinkText = currentClonableLink.querySelector('.downloads-row-item__link-text');
                        currentLinkText.textContent = link.textContent;
                        currentClonableLink.setAttribute('href', link);
                        currentLinksWrapper.append(currentClonableLink);
                    }
                });

                
                currentFilenameEl.textContent = file.fileName;
                currentRowsWrapper.append(currentClonableRow);

                let firstPlaceholderLink = currentClonableRow.querySelector('.downloads-row-item__link--lang');
                firstPlaceholderLink.remove();
            }
            if (file.typeOfRow == 'download--cad') {
                let currentAppendIdCap = (file.sectionIdCad);
                let currentAppendId = currentAppendIdCap.toLowerCase();

                let currentAppendWrapperSelector = ('#' + currentAppendId);
                let currentAppendWrapper = document.querySelector(currentAppendWrapperSelector).querySelector('.downloads-row-item__list--cad');


                if (file.sectionIdCad == currentAppendIdCap) {
                    let clonebleCadRow = document.querySelector('.cad-row-grid--download-row--clone').cloneNode(true);
                    let cadRowName = clonebleCadRow.querySelector('.h6--sap--name');
                    let cadRowDescription = clonebleCadRow.querySelector('.h6--sap--description');
                    let cadRowLink = clonebleCadRow.querySelector('.downloads-row-item__link');


                    cadRowName.textContent = file.sapNumberCad;
                    cadRowDescription.textContent = file.sapDescription;
                    cadRowLink.setAttribute('href', file.linkCad);

                    currentAppendWrapper.append(clonebleCadRow);
                }
            }


        }
    });
});


//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//тут мутим авторизацию для США пользователей
let url = 'https://api.geoapify.com/v1/ipinfo?apiKey=35edb2debb9a4ee785f52b02f7127781';
let countryCode;
let usSections = document.querySelectorAll('[auth-from-usa="true"]');
let usLinks = document.querySelectorAll('[auth-from-usa="true"] a');

let formOpenTrigger = document.querySelector('.open3');
let formCloseTrigger = document.querySelector('.close3');
let formCloseButton = document.querySelector('.popup__close');
let formUsaUser = document.querySelector('.form-block__form--download');



formCloseButton.addEventListener('click', function () {
    formCloseTrigger.click();
});

formUsaUser.addEventListener('submit', function () {
    localStorage.setItem('user', 'authorized')
});



function userUsaCheck() {
    usLinks.forEach(downloadLink => {
        downloadLink.addEventListener('click', function (event) {
            if (localStorage.getItem('user') == null) {
                event.preventDefault();
                formOpenTrigger.click();
            }
        });

    });
}



fetch(url)
    .then(res => res.json())
    .then((out) => {
        let countryObject = out;
        countryCode = countryObject.country.iso_code;

        if (countryCode == 'US') {
            usaStatus = true;
            userUsaCheck();
        }
    })
    .catch(err => { throw err });




    console.log('fresh');