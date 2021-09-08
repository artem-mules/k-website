let popUpDataEl = document.querySelector('.popup-data');
let popUpDatavalue = popUpDataEl.textContent;

let parsed = JSON.parse(popUpDatavalue);
console.log(parsed);


parsed.forEach(parsedObj => {
    for (const [key, value] of Object.entries(parsedObj)) {
        // console.log(`${key}: ${value}`);
        if ([key] == 'name-of-section') {
            console.log('⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️name of section is:');
            console.log(`${value}`);
            console.log('and value of columns is: ');
        } else {
            console.log(`${value}`);
        }
    }
});
