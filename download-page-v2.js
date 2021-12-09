//и всё таки надо хранить все текстовые значения в начале страницы, аттрибуты тоже нужны безусловно
//но иначе weGlot не переводит контент

let allDataName = document.querySelectorAll('.data-src');
let listOfSection = new(Array)
let pastePlace = document.querySelector('.page-wrapper');

allDataName.forEach(dataName => {
    let sectionName = dataName.getAttribute('data-section-name').split('/')[1];

    if (listOfSection.includes(sectionName) == false) {
        listOfSection.push(sectionName);
    } 
});

listOfSection.forEach(arrayItem => {
    let clonableSection = document.querySelector('.section--placeholder').cloneNode(true);
    clonableSection.classList.remove('section--placeholder');
    let currentSectionName = clonableSection.querySelector('h2');
    currentSectionName.textContent = arrayItem;
    pastePlace.append(clonableSection);
});

// let allDownloadDataDivs = document.querySelectorAll('.block__download-data');
// let sectionsDataArray = new(Array);

// allDownloadDataDivs.forEach(downloadDataDiv => {
//     let divAttrValue = downloadDataDiv.getAttribute('name-and-order');
//     if (sectionsDataArray.includes(divAttrValue) == false) {
//         sectionsDataArray.push(divAttrValue);
//     } 
// });

// console.log(sectionsDataArray);