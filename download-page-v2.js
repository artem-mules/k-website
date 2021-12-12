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
        linkDe: collectionItem.querySelector('.de'),
        linkEn: collectionItem.querySelector('.en'),
        linkCh: collectionItem.querySelector('.ch'),
        linkFr: collectionItem.querySelector('.fr'),
        linkIt: collectionItem.querySelector('.it'),
        linkCad: collectionItem.querySelector('.cad'),
        sectionOrder: dataSrc.getAttribute('data-section-name').split('/')[0],
        sectionOrderCad: dataSrc.getAttribute('data-cad-category').split('/')[0],
        sectionId: dataSrc.getAttribute('data-section-name').split('/')[1],
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
    clonableSection.setAttribute('id', sectionObject.sectionId);
    clonableSection.style.order = sectionObject.sectionOrder;
    let currentRowsWrapper = clonableSection.querySelector('.downloads-rows-wrapper');
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



    currentRowsWrapper.remove();
    pageWrapper.append(clonableSection);
});