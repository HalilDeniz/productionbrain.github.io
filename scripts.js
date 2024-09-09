let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-inner img');
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-inner img');
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-inner img');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

function updateSlides() {
    const slides = document.querySelectorAll('.carousel-inner img');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});










