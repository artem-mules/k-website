let popUpDataEl = document.querySelector('.popup-data');
let popUpDatavalue = popUpDataEl.textContent;
let popupWrapper = document.querySelector('.popup-block__2');

let parsed = JSON.parse(popUpDatavalue);


parsed.forEach(parsedObj => {
    for (const [key, value] of Object.entries(parsedObj)) {
        if ([key] == 'name-of-section') {
            let clonableSectionHeader = document.querySelector('.pop-up-row--section-name').cloneNode(true);
            clonableSectionHeader.querySelector('.pop-up-row__text').textContent = `${value}`;
            popupWrapper.append(clonableSectionHeader);
        } else {
            let cleanArray = new Array();
            let valueSplitted = `${value}`;
            valueSplitted = valueSplitted.split('@');
            valueSplitted.forEach(splittedItem => {
                if (splittedItem == '(*)' || splittedItem == ' (*)' || splittedItem == '(*)' || splittedItem == ' (*) ' || splittedItem == '  (*)') {

                    splittedItem = ''

                    cleanArray.push(splittedItem);
                } else {
                    cleanArray.push(splittedItem);
                }
            });



            let clonableSectionDataRow = document.querySelector('.pop-up-row--data').cloneNode(true);
            let rowPlaceHolder1 = clonableSectionDataRow.querySelector('.pop-up-row__text__1');
            let rowPlaceHolder2 = clonableSectionDataRow.querySelector('.pop-up-row__text__2');
            rowPlaceHolder1.textContent = cleanArray[0];
            rowPlaceHolder2.textContent = cleanArray[1];
            popupWrapper.append(clonableSectionDataRow);
        }
    }
});

//remove unnecessary boarders

let readySectionName = document.querySelectorAll('.pop-up-row--section-name');
readySectionName.forEach(readyName => {
    if (readyName.previousSibling != null) {
        let currentReadyName = readyName.previousSibling;
        currentReadyName.classList.add('border-bottom--none');
    }
});
