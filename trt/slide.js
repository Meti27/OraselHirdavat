let firstSlideIndex = 0;
  let firstSlides = document.getElementsByClassName("slides");
  let firstAutoSlideTimer;

  const displayFirstSlide = (index) => {
    if (index >= firstSlides.length) firstSlideIndex = 0;
    if (index < 0) firstSlideIndex = firstSlides.length - 1;

    for (let i = 0; i < firstSlides.length; i++) {
      firstSlides[i].classList.remove("active");
    }
    firstSlides[firstSlideIndex].classList.add("active");
  };

  const changeSlides = (n) => {
    clearInterval(firstAutoSlideTimer);
    firstSlideIndex += n;
    displayFirstSlide(firstSlideIndex);
    firstAutoSlideTimer = setInterval(() => changeSlides(1), 3000);
  };

  const initializeFirstSlides = () => {
    displayFirstSlide(firstSlideIndex);
    firstAutoSlideTimer = setInterval(() => changeSlides(1), 3000);
  };

  window.onload = initializeFirstSlides;
  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000)}; // Change image every 3 seconds