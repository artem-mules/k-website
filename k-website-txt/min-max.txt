let allP = document.querySelectorAll('p');
allP.forEach(p => {
    let pContent = p.textContent;
    let splittedLine = pContent.split('^');
    if (splittedLine.length > 1) {
        p.textContent = '';
        splittedLine.forEach(el => {
            if (el == 'max' || el == 'min') {
                if (el == 'max') {
                    p.insertAdjacentHTML('beforeend', '<sub>max</sub>');
                }
                if (el == 'min') {
                    p.insertAdjacentHTML('beforeend', '<sub>min</sub>');
                }
            } else {
                p.insertAdjacentHTML('beforeend', el);
            }
        });
    }
});