//тут мутим авторизацию для США пользователей
let url = 'https://api.geoapify.com/v1/ipinfo?apiKey=35edb2debb9a4ee785f52b02f7127781';
let countryCode;
let usSections = document.querySelectorAll('[auth-from-usa="true"]');
let usLinks = document.querySelectorAll('[auth-from-usa="true"] a');

let formOpenTrigger = document.querySelector('.open3');
let formCloseTrigger = document.querySelector('.close3');
let formCloseButton = document.querySelector('.popup__close');
let formUsaUser = document.querySelector('.form-block__form--download');



formCloseButton.addEventListener('click', function () {
    formCloseTrigger.click();
});

formUsaUser.addEventListener('submit', function () {
    localStorage.setItem('user', 'authorized')
});



function userUsaCheck() {
    console.log('стартовали userUsaCheck');
    usLinks.forEach(downloadLink => {
        downloadLink.addEventListener('click', function (event) {
            console.log('кликнули же!');
            if (localStorage.getItem('user') == null) {
                event.preventDefault();
                formOpenTrigger.click();
            }
        });

    });
}



fetch(url)
    .then(res => res.json())
    .then((out) => {
        let countryObject = out;
        countryCode = countryObject.country.iso_code;

        if (countryCode == 'US') {
            usaStatus = true;
            userUsaCheck();
        }
    })
    .catch(err => { throw err });



//1. прежде всего надо отрендерить секции внутри када
//2. потом переберая секции заполнить её файлами, как мы сделали для неКадовых секций
//3. секции только для НЕМ видно только на НЕМ версии сайта
//4. доступ к файлу через форму (из США)
//5. придя на страницу по якорю — всё ок
//6. анимации для секций
//7. после конца работ над страницей проверить не сломались ли transions для ссылок
//8. подготовиться к рабочему дню — просмотреть TOGGL