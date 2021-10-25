function translateDateToGerman() {
    let dateLabels = document.querySelectorAll('.blog-body__date');

    dateLabels.forEach(label => {
        splittedLabel = label.textContent.split(' ')
        currentNonth = splittedLabel[0];


        if (currentNonth == 'January') {
            currentNonth = 'Januar'
        }
        if (currentNonth == 'February') {
            currentNonth = 'Februar'
        }
        if (currentNonth == 'March') {
            currentNonth = 'März'
        }
        if (currentNonth == 'April') {
            currentNonth = 'April'
        }
        if (currentNonth == 'May') {
            currentNonth = 'Mai'
        }
        if (currentNonth == 'June') {
            currentNonth = 'Juni'
        }
        if (currentNonth == 'July') {
            currentNonth = 'Juli'
        }
        if (currentNonth == 'August') {
            currentNonth = 'August'
        }
        if (currentNonth == 'September') {
            currentNonth = 'September'
        }
        if (currentNonth == 'October') {
            currentNonth = 'Oktober'
        }
        if (currentNonth == 'November') {
            currentNonth = 'November'
        }
        if (currentNonth == 'December') {
            currentNonth = 'Dezember'
        }


        label.textContent = (currentNonth + ' ' + splittedLabel[1] + ' ' + splittedLabel[2]);
    });

}

translateDateToGerman();
