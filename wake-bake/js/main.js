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



(function () {
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


    /* =========================== Tabs ================ */

    const tabControls = document.querySelector('.tab-controls');

    tabControls.addEventListener('click', toggleTab);

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link'); /* присваиваем переменной значение таргета, смотрим есть ли у этого таргета родитель с классом tab-controls__link */

        if (!tabControl) return;
        e.preventDefault(); /* Отменяет дефолтное поведение ссылки, т.е. не нужно никуда перекидывать по ссылке */
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentId = tabControl.getAttribute('href'); /* получаю и записваю в переменную значение href */
        const tabContent = document.querySelector(tabContentId);
        const activControl = document.querySelector('.tab-controls__link--active');
        const activContent = document.querySelector('.tab-content--show');

        if (activControl) { /* Если есть этот элемент, т только тогда отменяем его класс, это проверка на всякий случай если в дальнейшем кто то удалит класс или захочет чтобы таб был скрыт */
            activControl.classList.remove('tab-controls__link--active');
        }

        if (activContent) {
            activContent.classList.remove('tab-content--show'); /* Нахожу есть ли уже у какогонибудь элемента  такой класс и удаляю его */
        }

        tabControl.classList.add('tab-controls__link--active'); /* добавляем модификатор чтобы делать кнопку активной, подсвечивать */
        tabContent.classList.add('tab-content--show');
    }

    /* ======================= Accordion ====================== */

    const accordionList = document.querySelectorAll('.accordion-list'); /* Находим все аккордион листы во всем документе и записываем в переменную */

    accordionList.forEach(el => {

        // document.querySelector('.accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__content').scrollHeight + 'px';

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget; /* Получаю элемент на который навешан обработчик событий, т.е. аккордионлист на терретории которого кликнули */
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened'); /* Ищу открытые item внутри аккордиона, который нашли выше */
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control'); /* Получаю тот элемент, на который кликнули */
            if (!accordionControl) return;
            const accordionItem = accordionControl.parentElement; /* Записываем в пременную элемент на котором кликнули на кнопку, т.е. непоссредственно кликнутый аккордион, т.е. находим accordion-list__item на котором кликнули кноку accordion-list__control*/
            const accordionContent = accordionControl.nextElementSibling; /* Это свойство  выбирает следующий элемент после кнопки. Записываем в переменную контент аккордиона, т.е. nextElementSibling - элемент, следующий за accordionItem это у нас кнопка, поэтому очень важна последовательность элементов в html структуре, сперва идет <button class="accordion-list__control"> затем <div class="accordion-list__content"> */

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) { /* Здесь реализовано условие при котором закрывается открытая вкладка аккордиона при клике на другую вкладку аккордиона, либо ри клике на саму открытую вкладку */
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; /* scrollHeight - узнаём истиную высоту элемента со всем контенотом и для accordion-list__content меняем стиль maxHeight с 0 на вычисленное js значение в пикселях, тем самым аккордион разворачивается на необходимую величину  */
            } else {
                accordionContent.style.maxHeight = null; /*  иначе, обнуляем значение оно снова становится как прописанов css, т.е. 0 */
            }
        });
    })


    /* =========== Слайдер-галерея ============== */

    const swiper = new Swiper('.gallary__slider', {
        spaceBetween: 15, /* расстояние между слайдами */
        slidesPerView: 1.5, /* кол-во вдимых слайдов за раз */

        // If we need pagination
        pagination: {
            el: '.gallary__pagination',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallary__next',
            prevEl: '.gallary__prev',
        },

        /* Адаптив слайдера через брэйкпоинтс */

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 601px
            601: {
                spaceBetween: 32,
                slidesPerView: 3,
            },

            // when window width is >= 801px
            801: {
                spaceBetween: 32,
                slidesPerView: 4,
            },

            // when window width is >= 1101px
            1101: {
                slidesPerView: 4,
            }
        }
    });
})()
