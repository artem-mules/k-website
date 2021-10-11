let appendPlace = document.querySelector('._1--nav');
let cloneElement = document.querySelector('.header-drop-nav').cloneNode(true);
let dataHoverElements = cloneElement.querySelectorAll('[data-hover]');
dataHoverElements.forEach(dropdown => {
    dropdown.setAttribute('data-hover', 'true');
});
appendPlace.append(cloneElement);