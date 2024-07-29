const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

btn.addEventListener('click', () => {
    // text.classList.add('red'); /* Добавляем элементу с классом text класс red */
    text.classList.toggle('red'); /* Преключаем класс при нажатии, т.е. добавлем и у,ираем класс  red */
    text.classList.toggle('move');
        if (text.classList.contains('move')) {
            text.textContent = 'Двигаюсь';
        } else {
            text.textContent = 'Текст';
        }
})

/* ====================================================================================================== */

const circle = document.querySelector('.circle');
document.addEventListener('scroll', () => {
   /* ?????????????????????? */ ;
})