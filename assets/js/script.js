//добавление констант
const slides = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
//Добавление действующего слайда
let currentSlide = 0;
//функция показывающая слайды
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}
//фкункция включения следующего слайда
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}
//функция включения перведущего слайда
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}
//Добавление кликов на стрелочки
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);