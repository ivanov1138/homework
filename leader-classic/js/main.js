(function () {

    /* -------------- language menu ---------- */

    document.addEventListener('DOMContentLoaded', function () {
        // Получаем элементы из DOM
        const languageToggle = document.getElementById('languageToggle'); // Элемент для переключения языка
        const languageOptions = document.getElementById('languageOptions'); // Элемент с опциями языков
        const languageAbbr = document.getElementById('languageAbbr'); // Элемент для отображения выбранного языка
        const selectedFlag = document.getElementById('selectedFlag'); // Элемент для отображения флага выбранного языка

        // Функция для скрытия меню
        function hideMenu() {
            languageOptions.classList.remove('open'); // Убираем класс open, чтобы скрыть меню
        }

        // Обработчик клика на элементе переключения языка
        languageToggle.addEventListener('click', function (event) {
            event.stopPropagation(); // Останавливаем всплытие события
            languageOptions.classList.toggle('open'); // Переключаем класс open для открытия/закрытия меню
        });

        // Обработчик клика по документу для скрытия меню
        document.addEventListener('click', hideMenu);

        // Обработчик нажатия клавиши Escape для скрытия меню
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') { // Проверяем, нажата ли клавиша Escape
                hideMenu(); // Скрываем меню
            }
        });

        // Получаем все элементы с опциями языков
        const languageOptionElements = document.querySelectorAll('.language-menu__option');
        languageOptionElements.forEach(option => {
            // Обработчик клика на каждой опции языка
            option.addEventListener('click', function (event) {
                event.stopPropagation(); // Останавливаем всплытие события
                const lang = this.getAttribute('data-lang'); // Получаем выбранный язык из атрибута

                // Обновляем отображение выбранного языка
                languageAbbr.textContent = lang === 'ru' ? 'RU' : 'ENG';

                // Обновляем флаг в зависимости от выбранного языка
                if (lang === 'ru') {
                    selectedFlag.innerHTML = `
                                        <svg width="23.000000" height="23.000000" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                    Created with Pixso.
                                            </desc>
                                            <defs/>
                                            <mask id="mask113_120" mask-type="alpha" maskUnits="userSpaceOnUse" x="0.000000" y="0.000000" width="23.000000" height="23.000000">
                                                <circle id="Ellipse 1" cx="11.500000" cy="11.500000" r="11.500000" fill="#C4C4C4" fill-opacity="1.000000"/>
                                            </mask>
                                            <g mask="url(#mask113_120)">
                                                <rect id="Rectangle 57" x="-3.000000" y="-1.000000" width="29.000000" height="8.000000" fill="#FFFFFF" fill-opacity="1.000000"/>
                                                <rect id="Rectangle 58" x="-3.000000" y="7.000000" width="29.000000" height="8.000000" fill="#0047FF" fill-opacity="1.000000"/>
                                                <rect id="Rectangle 59" x="-3.000000" y="15.000000" width="29.000000" height="8.000000" fill="#FF0000" fill-opacity="1.000000"/>
                                            </g>
                                        </svg>
                    `;
                } else if (lang === 'en') {
                    selectedFlag.innerHTML = `
                                        <svg id="Layer_1" enable-background="new 0 0 512 512" width="23.000000" height="23.000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#f0f0f0" r="256"></circle><g fill="#0052b4"><path d="m52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178z"></path><path d="m503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076z"></path><path d="m8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075z"></path><path d="m411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177z"></path><path d="m100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102v-133.176z"></path><path d="m189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075z"></path><path d="m322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075z"></path><path d="m370.005 322.784 89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z"></path></g><g fill="#d80027"><path d="m509.833 222.609h-220.44-.001v-220.442c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461.744-33.391 2.167v220.44.001h-220.442c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319.744 22.461 2.167 33.391h220.44.001v220.442c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-.743 33.391-2.167v-220.44-.001h220.442c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-.744-22.461-2.167-33.391z"></path><path d="m322.783 322.784 114.236 114.236c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482z"></path><path d="m189.217 322.784h-.002l-114.235 114.235c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804z"></path><path d="m189.217 189.219v-.002l-114.236-114.237c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z"></path><path d="m322.783 189.219 114.237-114.238c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                    `;
                }

                hideMenu(); // Скрываем меню после выбора языка
            });
        });
    });



    /* ================= Burger modal ========================= */

    // Добавляю обработчик события 'click' на документ и запускаю функцию 
    document.addEventListener('click', burgerInt);

    // Функция, обрабатывающая клик по элементам
    function burgerInt(e) {
        // Находим элемент с классом '.nav-small__burger', на который кликнули
        const burgerIcon = e.target.closest('.nav-small__burger');
        const burgerNavLink = e.target.closest('.nav__link');
        const enterButton = e.target.closest('.header__top-enter');
        const openAccountButton = e.target.closest('#openAccount');
        // Получаем все элементы навигации с классом '.nav-small__item' (маленькое nav меню с иконками)
        const navIcons = document.querySelectorAll('.nav-small__item');

        // Путь к иконкам
        const iconBurger = './img/icons/burger-menu/burger.svg'; /* бургер */
        const iconClose = './img/icons/burger-menu/close.svg'; /* крестик */

        // Получаю элемент иконки по id (иконка бургера)
        const icon = document.getElementById('burgerIcon');

        /* Если кликнули на иконку бургера */
        if (burgerIcon) {
            // Скрываем все элементы навигации (именно иконки nav меню)
            let navIconsHidden = navIcons.forEach(icon => {
                icon.style.visibility = 'hidden';
            });
        }

        // Функция для отображения элементов навигации
        let navIconsVisible = function showNavIcons() {
            // Делаем все элементы навигации видимыми
            navIcons.forEach(icon => {
                icon.style.visibility = 'visible';
            });
        }

        // Если кликнули не на бургер и не на ссылку навигации, выходим из функции
        if (!burgerIcon && !burgerNavLink && !enterButton && !openAccountButton) return;
        // Если ширина окна больше 900 пикселей, выходим из функции
        if (document.documentElement.clientWidth > 900) return;

        if (enterButton || openAccountButton) {
            document.body.classList.remove('nav-fixed--open') && (icon.src = iconBurger) & (navIconsVisible());
        }

        // Проверяю открыто ли бургер меню
        if (!document.body.classList.contains('nav-fixed--open')) {
            document.body.classList.add('nav-fixed--open') & (icon.src = iconClose); // Меняем иконку на иконку закрытия
        } else {
            document.body.classList.remove('nav-fixed--open') & (icon.src = iconBurger) & (navIconsVisible()); // Меняем иконку обратно на иконку бургера
        }

        /* Закрываю бугер  меню при нажатии на кнопки Войти или Открыть счёт */
        if (enterButton || openAccountButton) {
            document.body.classList.remove('nav-fixed--open') & (icon.src = iconBurger) & (navIconsVisible());
        }
    }

    /*  ------------ Цвет иконки меню nav ----------------- */


    // const links = document.querySelectorAll('.nav-small__link');

    // links.forEach(link => {
    //     link.addEventListener('click', function (event) {
    //         event.preventDefault(); // Отменяем переход по ссылке

    //         // Убираем класс active у всех ссылок
    //         links.forEach(l => {
    //             l.querySelector('.nav-small__icon-color').classList.remove('nav-small__active');
    //         });

    //         // Добавляем класс active к текущей ссылке
    //         this.querySelector('.nav-small__icon-color').classList.add('nav-small__active');
    //     });
    // });


// // Получаем все ссылки с классом .nav-small__link
// const links = document.querySelectorAll('.nav-small__link');

// // Функция для проверки видимости блока и обновления активного состояния
// function updateActiveLink() {
//     // Проходим по всем ссылкам
//     links.forEach(link => {
//         const href = link.getAttribute('href'); // Получаем атрибут href (например, #tarifs)
//         const target = document.querySelector(href); // Находим элемент с соответствующим id

//         if (target) {
//             const rect = target.getBoundingClientRect(); // Получаем координаты элемента относительно окна
//             const windowHeight = window.innerHeight; // Высота окна браузера
//             const isInView = (
//                 rect.top >= 0 && // Элемент виден сверху
//                 rect.top < windowHeight / 2 // Элемент виден хотя бы наполовину (можно настроить)
//             );

//             // Если блок виден, добавляем класс active, иначе убираем
//             if (isInView) {
//                 links.forEach(l => {
//                     l.querySelector('.nav-small__icon-color').classList.remove('nav-small__active');
//                 });
//                 link.querySelector('.nav-small__icon-color').classList.add('nav-small__active');
//             }
//         }
//     });
// }

// // Обработчик клика 
// links.forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault(); // Отменяем переход по ссылке

//         // Убираем класс active у всех ссылок
//         links.forEach(l => {
//             l.querySelector('.nav-small__icon-color').classList.remove('nav-small__active');
//         });

//         // Добавляем класс active к текущей ссылке
//         this.querySelector('.nav-small__icon-color').classList.add('nav-small__active');
//     });
// });

// // Обработчик клика по якорным ссылкам с учетом высоты хэдера
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const href = this.getAttribute('href');
//         const target = document.querySelector(href);
//         if (target) {
//             const headerHeight = document.querySelector('.header__top').offsetHeight;
//             const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
//             window.scrollTo({
//                 top: offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// window.addEventListener('scroll', () => {
//     const wrapper = document.querySelector('.wrapper');
//     if (wrapper) {
//         const rect = wrapper.getBoundingClientRect();
//         if (rect.top < 0) {
//             console.log('Wrapper смещен вверх на:', Math.abs(rect.top)); // Для отладки
//         }
//     }
// });

// // Добавляем слушатель события скроллинга
// window.addEventListener('scroll', () => {
//     // Задержка для оптимизации (чтобы не вызывалось слишком часто)
//     clearTimeout(window.scrollTimeout);
//     window.scrollTimeout = setTimeout(updateActiveLink, 100);
// });

// // Вызываем функцию при загрузке страницы, чтобы сразу проверить положение
// window.addEventListener('load', updateActiveLink);




// Получаем все якорные ссылки с классами .nav-small__link и .nav__item (включая вложенные <a>)
const links = document.querySelectorAll('.nav-small__link, .nav__item a[href^="#"]');

// Функция для обновления активного состояния
function updateActiveLink() {
    let activeLink = null;

    // Проходим по всем ссылкам
    links.forEach(link => {
        const href = link.getAttribute('href') || link.closest('li')?.querySelector('a')?.getAttribute('href');
        const target = document.querySelector(href);

        if (target) {
            const rect = target.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isInView = (rect.top >= 0 && rect.top < windowHeight / 2);

            if (isInView) {
                activeLink = link; // Берем саму ссылку
            }
        }
    });

    // Убираем класс active у всех ссылок
    links.forEach(link => {
        link.classList.remove('nav-small__active');
        link.querySelector('.nav-small__icon-color')?.classList.remove('nav-small__active');
    });

    // Добавляем класс active к текущей ссылке
    if (activeLink) {
        activeLink.classList.add('nav-small__active');
        activeLink.querySelector('.nav-small__icon-color')?.classList.add('nav-small__active');
    }
}

// Обработчик клика для всех якорных ссылок
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const href = this.getAttribute('href') || this.closest('li')?.querySelector('a')?.getAttribute('href');
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = document.querySelector('.header__top')?.offsetHeight || 0;
            const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Убираем active у всех
            links.forEach(l => {
                l.classList.remove('nav-small__active');
                l.querySelector('.nav-small__icon-color')?.classList.remove('nav-small__active');
            });

            // Добавляем active к кликнутой ссылке
            this.classList.add('nav-small__active');
            this.querySelector('.nav-small__icon-color')?.classList.add('nav-small__active');
        }
    });
});

// Обработчик скроллинга с оптимизацией
window.addEventListener('scroll', () => {
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(updateActiveLink, 100);
});

// Инициализация при загрузке
window.addEventListener('load', updateActiveLink);



    /*  ================ Галочка чекбокса ============ */
    const checkBox = document.querySelector('.contact__checkbox');

    checkBox.addEventListener('click', () => {
        checkBox.classList.toggle('checked'); /* Добавляет класс checked (конструкция в css: .contact__checkbox.checked::before) */
    });


    /*  --- Чекбокс в модалке Call Me */
    const checkBox2 = document.querySelector('.contact__checkbox2');

    checkBox2.addEventListener('click', () => {
        checkBox2.classList.toggle('checked'); /* Добавляет класс checked (конструкция в css: .contact__checkbox.checked::before) */
    });



    /*  -------------------------- Дуга с градиентом -------------------------------- */
    document.addEventListener('DOMContentLoaded', () => {
        // Получаем ссылки на элементы DOM
        const gradientSlider = document.getElementById('gradient-slider');
        const arcColor = document.getElementById('arc-color');
        const startColor = document.getElementById('start-color');
        const valueText = document.getElementById('value-text');
        const riskText = document.getElementById('risk-text');
        const arcBg = document.getElementById('arc-bg'); // Элемент фона дуги
        const totalLength = 1083.85; // Длина полукруга: π * r ≈ 3.14159 * 345 ≈ 1083.85

        // Устанавливаем начальный цвет бэкграунда
        gradientSlider.style.setProperty('--track-start-color', '#525252');
        gradientSlider.style.setProperty('--track-end-color', '#525252');
        gradientSlider.style.setProperty('--track-progress', '0%');
        gradientSlider.style.setProperty('--thumb-color', '#525252');

        // Функция для интерполяции цветов
        function interpolateColor(startColor, endColor, factor) {
            const r = Math.round(startColor.r + (endColor.r - startColor.r) * factor);
            const g = Math.round(startColor.g + (endColor.g - startColor.g) * factor);
            const b = Math.round(startColor.b + (endColor.b - startColor.b) * factor);
            return `rgb(${r}, ${g}, ${b})`;
        }

        // Слушатель события изменения ползунка
        gradientSlider.addEventListener('input', () => {
            // Получаем текущее значение ползунка (0-58)
            const value = parseInt(gradientSlider.value);
            const factor = value / 58; // Фактор прогресса от 0 до 1
            const progress = (value / 58) * 100; // Процент прогресса для градиента

            // Обновляем дугу, уменьшая смещение для заполнения
            arcColor.setAttribute('stroke-dashoffset', totalLength * (1 - factor));

            // Обновляем прозрачность начального цвета градиента
            let alpha = 1;
            if (value <= 14.5) { // 25% от 58 ≈ 14.5
                alpha = value / 14.5; // Прозрачность от 0 до 1
                startColor.setAttribute('stop-opacity', alpha);
            } else {
                startColor.setAttribute('stop-opacity', 1);
            }

            // Вычисляем текущий цвет на основе положения ползунка
            let currentColor = '#525252';
            if (value <= 14.5) {
                currentColor = `rgba(106, 219, 131, ${alpha})`; // Прозрачный до зеленого
            } else if (value <= 29) { // 50% от 58 ≈ 29
                const subFactor = (value - 14.5) / 14.5; // Прогресс внутри диапазона
                currentColor = interpolateColor({ r: 106, g: 219, b: 131 }, { r: 255, g: 255, b: 0 }, subFactor); // Зеленый до желтого
            } else if (value <= 43.5) { // 75% от 58 ≈ 43.5
                const subFactor = (value - 29) / 14.5; // Прогресс внутри диапазона
                currentColor = interpolateColor({ r: 255, g: 255, b: 0 }, { r: 255, g: 165, b: 0 }, subFactor); // Желтый до оранжевого
            } else {
                const subFactor = (value - 43.5) / 14.5; // Прогресс внутри диапазона
                currentColor = interpolateColor({ r: 255, g: 165, b: 0 }, { r: 255, g: 0, b: 0 }, subFactor); // Оранжевый до красного
            }

            // Обновляем цвет бэкграунда трека и ползунка
            gradientSlider.style.setProperty('--track-start-color', '#525252');
            gradientSlider.style.setProperty('--track-end-color', '#525252');
            gradientSlider.style.setProperty('--track-progress', `${progress}%`);
            gradientSlider.style.setProperty('--thumb-color', currentColor);

            // Убеждаемся, что фон дуги остается видимым
            if (arcBg) arcBg.setAttribute('stroke', '#525252'); // Восстанавливаем начальный цвет фона

            // Обновляем текст с текущим значением
            if (valueText) valueText.textContent = value;

            // Обновляем текст и бэкграунд риска в зависимости от значения
            if (riskText) {
                if (value < 20) {
                    riskText.textContent = "Низкий риск";
                    riskText.style.backgroundColor = "#6ADB83";
                } else if (value < 36) {
                    riskText.textContent = "Умеренный риск";
                    riskText.style.backgroundColor = "#fcc630";
                } else {
                    riskText.textContent = "Высокий риск";
                    riskText.style.backgroundColor = "#FF0000";
                }
            }
        });

        // Инициализируем начальное значение
        gradientSlider.dispatchEvent(new Event('input'));
    });

    /* Обработчик событий при клике на Span радиокнопок под градиентом */
    document.querySelectorAll('.radio-option span').forEach(span => {
        span.addEventListener('click', function() {
            const radioId = this.previousElementSibling.getAttribute('for'); // Получаем id связанного input
            const radio = document.getElementById(radioId);
            if (radio) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change')); // Вызываем событие изменения, если нужно
            }
        });
    });

    /* Адаптив. Изменение размеров дуги при уменьшении ширины экрана */
    function updateSvgViewport() {
        const svg = document.getElementById('arc-svg');
        const width = window.innerWidth;

        if (width <= 650) {
            svg.setAttribute('width', '370');
            svg.setAttribute('height', '300');
            svg.setAttribute('viewBox', '0 -55 690 600');
        } else if (width <= 800) {
            svg.setAttribute('width', '690');
            svg.setAttribute('height', '400');
            svg.setAttribute('viewBox', '0 -55 690 600');
        } else {
            svg.setAttribute('width', '690');
            svg.setAttribute('height', '400');
            svg.setAttribute('viewBox', '0 -60 690 470');
        }
    }

    // При загрузке и изменении размера окна
    window.addEventListener('load', updateSvgViewport);
    window.addEventListener('resize', updateSvgViewport);



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
            e.preventDefault();
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

})()