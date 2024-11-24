const close = document.querySelector('.burger-icon');
const body = document.querySelector('.body');
const bodyOpenedMenu = document.querySelector('.body--opened-menu');
const windowWidth = window.innerWidth;
let navLink = document.querySelector('.nav__link');

if (window.innerWidth <= 900) { /* Проверяю ширину экрана */
    body.classList.remove('body--opened-menu');
}

// close.addEventListener('click', () => {
//     if (body.classList.contains('body--opened-menu')) {
//         body.classList.remove('body--opened-menu');
//     } else {
//         body.classList.add('body--opened-menu');
//     }
// })

close.addEventListener('click', () => {
    if (!body.classList.contains('body--opened-menu')) {
        body.classList.add('body--opened-menu');
    } else {
        body.classList.add('body--closed-menu');
        body.classList.remove('body--opened-menu');
    }
})

navLink.addEventListener('click', () => {
    if (navLink.textContent = "Программа обучения") {
        /* Чтото делаем */
    } else if (navLink.textContent = "Галерея") {
        /* Чтото делаем */
    } else if (navLink.textContent = "Отзывы") {
        /* Чтото делаем */
    } else if (navLink.textContent = "Контакты") {
        /* Чтото делаем */
    }
})

