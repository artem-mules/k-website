let popUpDataEl = document.querySelector('.popup-data');
let popUpDatavalue = popUpDataEl.textContent;
let popupWrapper = document.querySelector('.popup-block__2');

let parsed = JSON.parse(popUpDatavalue);
console.log(parsed);


parsed.forEach(parsedObj => {
    for (const [key, value] of Object.entries(parsedObj)) {
        // console.log(`${key}: ${value}`);
        if ([key] == 'name-of-section') {
            let clonableSectionHeader = document.querySelector('.pop-up-row--section-name').cloneNode(true);
            clonableSectionHeader.querySelector('.pop-up-row__text').textContent = `${value}`;
            popupWrapper.append(clonableSectionHeader);
            console.log('⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️name of section is:');
            console.log(`${value}`);
            console.log('and value of columns is: ');
        } else {
            let valueSplitted = `${value}`;
            valueSplitted = valueSplitted.split('@');
            console.log(valueSplitted);
            // console.log(`${value}`);

            let clonableSectionDataRow = document.querySelector('.pop-up-row--data').cloneNode(true);
            let rowPlaceHolder1 = clonableSectionDataRow.querySelector('.pop-up-row__text__1');
            let rowPlaceHolder2 = clonableSectionDataRow.querySelector('.pop-up-row__text__2');
            rowPlaceHolder1.textContent = valueSplitted[0];
            rowPlaceHolder2.textContent = valueSplitted[1];
            popupWrapper.append(clonableSectionDataRow);
        }
    }
});
