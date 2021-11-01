let dateLabels = document.querySelectorAll('.body-3--date');

dateLabels.forEach(label => {
    splittedLabel = label.textContent.split(' ')
    currentNonth = splittedLabel[0];

    if (currentNonth  == 'Jan') {
        currentNonth  = 'Jan'
    }

    if (currentNonth  == 'Feb') {
        currentNonth  = 'Feb'
    }
    if (currentNonth  == 'Mar') {
        currentNonth  = 'Mär'
    }
    if (currentNonth  == 'Apr') {
        currentNonth  = 'Apr'
    }
    if (currentNonth  == 'May') {
        currentNonth  = 'Mai'
    }
    if (currentNonth  == 'Jun') {
        currentNonth  = 'Jun'
    }
    if (currentNonth  == 'Jul') {
        currentNonth  = 'Jul'
    }
    if (currentNonth  == 'Aug') {
        currentNonth  = 'Aug'
    }
    if (currentNonth  == 'Sep') {
        currentNonth  = 'Sep'
    }
    if (currentNonth  == 'Oct') {
        currentNonth  = 'Okt'
    }
    if (currentNonth  == 'Nov') {
        currentNonth  = 'Nov'
    }
    if (currentNonth  == 'Dec') {
        currentNonth  = 'Dez'
    }


    label.textContent = (currentNonth + ' ' + splittedLabel[1] + ' ' + splittedLabel[2]);
});
