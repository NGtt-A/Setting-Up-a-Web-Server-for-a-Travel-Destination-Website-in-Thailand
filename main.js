const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content-place h1", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".header__content-place h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".detail", {
  ...scrollRevealOption,
  delay: 800,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

document.getElementById('video-popup-trigger').onclick = function(event) {
  event.preventDefault();
  document.getElementById('video-popup').style.display = 'block';
  document.getElementById('video-frame').src = 'https://www.youtube.com/embed/dQeX2NYb_Qk?autoplay=1';
};

document.querySelector('.close').onclick = function() {
  document.getElementById('video-popup').style.display = 'none';
  document.getElementById('video-frame').src = ''; // Stop video when closing
};

window.onclick = function(event) {
  if (event.target == document.getElementById('video-popup')) {
    document.getElementById('video-popup').style.display = 'none';
    document.getElementById('video-frame').src = ''; // Stop video when closing
  }
};

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
