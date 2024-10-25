// ****************************count down****************************
const targetDate = new Date("Novmber 4, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
      <div class="time-unit">
          <span id="days">${days}</span>
          <div>DAY</div>
      </div>
      <div class="colon">:</div>
      <div  class="time-unit">
          <span id="hours">${hours < 10 ? `0${hours}` : hours}</span>
          <div>HRS</div>
      </div>
      <div class="colon">:</div>
      <div  class="time-unit">
          <span id="minutes">${minutes < 10 ? `0${minutes}` : minutes}</span>
          <div>MIN</div>
      </div>
      <div class="colon">:</div>
      <div  class="time-unit">
          <span id="seconds">${seconds}</span>
          <div>SEC</div>
      </div>`;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "Countdown Finished!";
  }
}, 1000);

//****************slider******************* */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  setTimeout(() => showSlides(slideIndex), 10000);
}
