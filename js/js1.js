/* Javascript de Slideshow */

var slideIndex = 1;
showSlides(slideIndex);

// Controles de siguiente imagen y anterior.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles imagenes
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Funcion que controla que ocurre cuando se acaban las imagenes, que pasa a la primera de nuevo.
//Tanto de los circulos como de los cursores anterior y siguiente
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("misimagenes");
  var dots = document.getElementsByClassName("circulo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    // Añade resalto sobre el circulo correspondiente a la imagen activa
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    // block para que ocupe la linea entera (elemento de bloque)
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

