let popupBgTeacher = document.querySelector(".popup-bg-teacher")
let popupTeacher = document.querySelector(".popup-teacher")
let openPopupButtonsTeacher = document.querySelectorAll('.open-popup-teacher');

openPopupButtonsTeacher.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBgTeacher.classList.add('active'); // Добавляем класс 'active' для фона
        popupTeacher.classList.add('active'); // И для самого окна
    })
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBgTeacher) { // Если цель клика - фот, то:
        popupBgTeacher.classList.remove('active'); // Убираем активный класс с фона
        popupTeacher.classList.remove('active'); // И с окна
    }
});