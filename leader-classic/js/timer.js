/* ---------------- Timer ------------------ */

    // Инициализируем общее количество секунд, начиная с 27 дней, 7 часов и 40 минут
    let totalSeconds = (27 * 24 * 60 * 60) + (7 * 60 * 60) + (40 * 60);

    // Функция для обновления таймера
    function updateTimer() {
        // Вычисляем количество оставшихся дней
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        // Вычисляем количество оставшихся часов
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        // Вычисляем количество оставшихся минут
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        // Вычисляем количество оставшихся секунд
        const seconds = totalSeconds % 60;

        // Обновляем текстовое содержимое элемента для дней, добавляя ведущий ноль при необходимости
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        // Обновляем текстовое содержимое элемента для часов, добавляя ведущий ноль при необходимости
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        // Обновляем текстовое содержимое элемента для минут, добавляя ведущий ноль при необходимости
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        // Обновляем текстовое содержимое элемента для секунд, добавляя ведущий ноль при необходимости
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        // Если общее количество секунд больше нуля, уменьшаем его на 1
        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            // Если таймер достиг нуля, сбрасываем его на начальное значение
            totalSeconds = (27 * 24 * 60 * 60) + (7 * 60 * 60) + (40 * 60); // Сброс на начальное значение
        }
    }

    // Устанавливаю интервал для обновления таймера каждую секунду (1000 миллисекунд)
    setInterval(updateTimer, 1000);