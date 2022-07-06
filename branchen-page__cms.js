let array__ctaButtons = document.querySelectorAll('.buttons--branch-cta');
let array__branchenNames = new Array();
let array__branchenNamesElements = document.querySelectorAll('.media-data-embed');
let array__buttonsEmbeds = document.querySelectorAll('.industry-button-data-embed');

array__branchenNamesElements.forEach(branchenNameElement => {
    let currentBranchenName = branchenNameElement.getAttribute('data-industry');
    if (array__branchenNames.includes(currentBranchenName) || currentBranchenName == '') {
    } else {
        array__branchenNames.push(currentBranchenName);
    }
});

array__buttonsEmbeds.forEach(buttonEmbed => {
    let currentButtonIndustry = buttonEmbed.getAttribute('industry-button-data')
    if (array__branchenNames.includes(currentButtonIndustry)) {
        buttonEmbed.parentElement.parentElement.parentElement.parentElement.classList.remove('ind--hide');
    }
});
