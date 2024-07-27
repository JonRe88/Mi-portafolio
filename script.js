let currentSlide = 0;
const slides = document.querySelectorAll('.portfolio-item');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    index = 0; // Cambia currentSlide por index
  }
  currentSlide = index; 