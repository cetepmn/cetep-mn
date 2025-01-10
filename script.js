let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    // Adiciona o autoplay
    setInterval(() => {
        nextSlide();
    }, 3000); // Troca de slide a cada 3 segundos
});
