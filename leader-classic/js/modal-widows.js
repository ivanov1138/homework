(function () {
/*  ================== Modal window =================== */

    const modal = document.querySelector('.modal');
    const modalButtons = document.querySelectorAll('.open-button');
    const modalBodyClasses = [
        'body--opened-modal-accaunt',
        'body--opened-modal-shares',
        'body--opened-modal-callme'
    ];
    function openModal(e) {
        e.preventDefault(); // Отменяем стандартное поведение
        const clickedButton = e.currentTarget; // Получаем нажатую кнопку
        // Определяем, какой класс добавить в зависимости от id кнопки
        let classToAdd = '';
        switch (clickedButton.id) {
            case 'openAccount':
                classToAdd = 'body--opened-modal-accaunt';
                break;
            case 'takeShares':
                classToAdd = 'body--opened-modal-shares';
                break;
            case 'callMe':
                classToAdd = 'body--opened-modal-callme';
                break;
            default:
                // Если id не совпадает, не добавляем классов (можно и оставить пустым)
                classToAdd = '';
        }

        // Удаляем все существующие классы модального окна из body
        modalBodyClasses.forEach(modClass => document.body.classList.remove(modClass));
        // Добавляем новый класс, если он есть
        if (classToAdd) {
            document.body.classList.add(classToAdd);
        }
    }
    function closeModal(e) {
        e.preventDefault();
        const target = e.target; // Получаем элемент, на который кликнули
        if (
            target.closest('.modal__cancel') ||
            target.classList.contains('modal') ||
            target.classList.contains('modal__text-enter') ||
            target.classList.contains('modal__text-registration')
        ) {
            // Удаляем все классы модального окна при закрытии
            modalBodyClasses.forEach(modClass => document.body.classList.remove(modClass));
        }
    }
    modalButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });
    modal.addEventListener('click', closeModal);
    document.addEventListener('keydown', event => {
        if (
            event.code === 'Escape' &&
            modalBodyClasses.some(modClass => document.body.classList.contains(modClass))
        ) {
            modalBodyClasses.forEach(modClass => document.body.classList.remove(modClass));
        }
    });
})()