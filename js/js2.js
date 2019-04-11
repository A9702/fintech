var indiceImg = 1;
mostrarImg(indiceImg);

// Next/previous controls
function sigImagen(n) {
  mostrarImg(indiceImg += n);
}

// Thumbnail image controls
function actualImagen(n) {
  mostrarImg(indiceImg = n);
}

function mostrarImg(n) {
  var i;
  var slides = document.getElementsByClassName("misImagenes");
  var dots = document.getElementsByClassName("circ");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {indiceImg = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[indiceImg-1].style.display = "block";
  dots[indiceImg-1].className += " active";
}
