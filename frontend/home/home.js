let popupBg = document.querySelector(".popup-bg")
let popup = document.querySelector(".popup")
let openPopup = document.querySelectorAll('.open-popup');

openPopup.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

