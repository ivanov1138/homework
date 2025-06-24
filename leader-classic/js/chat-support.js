 /* ================  Чат ==================== */

    // Получение элементов DOM
    const chatToggle = document.getElementById('chat-toggle'); // Кнопка для открытия/закрытия чата
    const chatWindow = document.getElementById('chat-window'); // Окно чата
    const chatClose = document.getElementById('chat-close'); // Кнопка закрытия чата
    const chatForm = document.getElementById('chat-form'); // Форма для отправки сообщений
    const chatInput = document.getElementById('chat-input'); // Поле ввода сообщения
    const chatMessages = document.getElementById('chat-messages'); // Контейнер для сообщений
    const chatHeader = document.getElementById('chat-header'); // Заголовок чата для перетаскивания
    let isFirstOpen = true; // Флаг для показа приветственного сообщения при первом открытии
    let isDragging = false; // Флаг состояния перетаскивания
    let currentX; // Текущая позиция X окна чата
    let currentY; // Текущая позиция Y окна чата
    let initialX; // Начальная позиция X мыши при старте перетаскивания
    let initialY; // Начальная позиция Y мыши при старте перетаскивания

    // Открытие/закрытие чата
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('open'); // Переключает видимость окна чата
        if (isFirstOpen && chatWindow.classList.contains('open')) {
            // Показываем приветственное сообщение при первом открытии
            addMessage('Здравствуйте! Я оператор службы поддержки, готов помочь вам с любым вопросом.', 'support');
            isFirstOpen = false; // Отключаем повторный показ
        }
    });

    // Закрытие чата по клику на кнопку закрытия
    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('open'); // Скрываем окно чата
    });

    // Обработка отправки сообщения
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Предотвращаем отправку формы
        const message = chatInput.value.trim(); // Получаем текст сообщения, удаляя пробелы
        if (message) {
            addMessage(message, 'user'); // Добавляем сообщение пользователя
            chatInput.value = ''; // Очищаем поле ввода
            // Симулируем ответ поддержки через 1 секунду
            setTimeout(() => {
                addMessage('Спасибо за сообщение! Мы ответим в ближайшее время.', 'support');
            }, 1000);
        }
    });

    // Функция для добавления сообщения в чат
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div'); // Создаем новый элемент для сообщения
        messageDiv.className = `message ${sender}`; // Задаем классы (user или support)
        messageDiv.textContent = text; // Устанавливаем текст сообщения
        chatMessages.appendChild(messageDiv); // Добавляем в контейнер сообщений
        chatMessages.scrollTop = chatMessages.scrollHeight; // Прокручиваем вниз
    }

    // Перетаскивание окна чата
    chatHeader.addEventListener('mousedown', (e) => {
        // Проверяем, что ширина экрана больше 640px (не мобильное устройство)
        if (window.innerWidth > 640) {
            initialX = e.clientX - currentX; // Запоминаем начальную позицию мыши по X
            initialY = e.clientY - currentY; // Запоминаем начальную позицию мыши по Y
            isDragging = true; // Активируем режим перетаскивания
        }
    });

    // Обработка перемещения мыши
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault(); // Предотвращаем выделение текста
            currentX = e.clientX - initialX; // Вычисляем новую позицию X
            currentY = e.clientY - initialY; // Вычисляем новую позицию Y

            // Ограничиваем перемещение в пределах окна браузера
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const chatWidth = chatWindow.offsetWidth;
            const chatHeight = chatWindow.offsetHeight;

            currentX = Math.max(0, Math.min(currentX, windowWidth - chatWidth)); // Ограничение по X
            currentY = Math.max(0, Math.min(currentY, windowHeight - chatHeight)); // Ограничение по Y

            // Применяем новую позицию
            chatWindow.style.left = currentX + 'px';
            chatWindow.style.top = currentY + 'px';
            chatWindow.style.right = 'auto';
            chatWindow.style.bottom = 'auto';
        }
    });

    // Завершение перетаскивания
    document.addEventListener('mouseup', () => {
        isDragging = false; // Отключаем режим перетаскивания
    });

    // Функция для сброса позиции окна чата в правый нижний угол
    function resetPosition() {
        chatWindow.style.left = ''; // Сбрасываем left
        chatWindow.style.top = ''; // Сбрасываем top
        chatWindow.style.right = '1rem'; // Устанавливаем начальную позицию
        chatWindow.style.bottom = '1rem';
        currentX = window.innerWidth - chatWindow.offsetWidth - 16; // 1rem = 16px
        currentY = window.innerHeight - chatWindow.offsetHeight - 16;
    }

    // Устанавливаем начальную позицию при загрузке
    resetPosition();

    // Обновляем позицию при изменении размера окна, если не перетаскиваем
    window.addEventListener('resize', () => {
        if (!isDragging) {
            resetPosition(); // Сбрасываем позицию в правый нижний угол
        }
    });
