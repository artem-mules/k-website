let collectionItems = document.querySelectorAll('.cl-i__download-data');
let pageWrapper = document.querySelector('.page-wrapper');
let sectionsList = new (Array);
let sectionsTask = new (Array);
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
            // if (file.typeOfRow == 'download--cad') {
            //     let currentClonableRow = document.querySelector('.downloads-row-item--cad').cloneNode(true);
            //     currentRowsWrapper.append(currentClonableRow);
            //     console.log('---3');
            // }


        }
    });
});

//1. прежде всего надо отрендерить секции внутри када
//2. потом переберая секции заполнить её файлами, как мы сделали для неКадовых секций
//3. секции только для НЕМ видно только на НЕМ версии сайта
//4. доступ к файлу через форму (из США)
//5. придя на страницу по якорю — всё ок
//6. анимации для секций
//7. после конца работ над страницей проверить не сломались ли transions для ссылок
//8. подготовиться к рабочему дню — просмотреть TOGGL