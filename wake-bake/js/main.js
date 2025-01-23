// const close = document.querySelector('.burger-icon');
// const body = document.querySelector('.body');
// const bodyOpenedMenu = document.querySelector('.body--opened-menu');
// let navLink = document.querySelector('.nav__link');

// close.addEventListener('click', () => {
//     if (!body.classList.contains('body--opened-menu')) {
//         body.classList.add('body--opened-menu');
//     } else {
//         body.classList.remove('body--opened-menu');
//     }
// })

// navLink.addEventListener('click', () => {
//     if (navLink.textContent = "Программа обучения") {
//         /* Чтото делаем */
//     } else if (navLink.textContent = "Галерея") {
//         /* Чтото делаем */
//     } else if (navLink.textContent = "Отзывы") {
//         /* Чтото делаем */
//     } else if (navLink.textContent = "Контакты") {
//         /* Чтото делаем */
//     }
// })



(function() {
    /* ================= Burger modal ========================= */

    document.addEventListener('click', burgerInt);

    function burgerInt(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return;
        if (document.documentElement.clientWidth > 900) return;

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    /* ========================= About modal =================== */
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.about__img-button');

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault(); /* Отменяет дефолтные настройки, Отменяется стандартное поведение */
        document.body.classList.toggle('body--opened-modal');
    }

    function closeModal(e) {
        e.preventDefault();
        const target = e.target /* получаем место клика */

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal');
        }
    }

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal')) {
            document.body.classList.remove('body--opened-modal');
        }
    })
        
})()
