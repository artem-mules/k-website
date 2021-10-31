let testString = 'ArtemSolary is*min*15000USD'
let splittedValue = testString.split('*');
splittedValue.forEach(text => {
    if (text == 'min' || text == 'max' ) {
        textWithSpan = ('<span class="min-max">' + text + '</span>' )
    }
});