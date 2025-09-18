const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-menu-list");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

const products = document.querySelector(".products");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const items = document.querySelectorAll(".product");
let index = 0;

function showSlide(i) {
  if (i < 0) index = items.length - 1;
  else if (i >= items.length) index = 0;
  else index = i;

  products.style.transform = `translateX(-${index * 100}%)`;
}

function enableSlider() {
  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));
  products.style.transform = "translateX(0)";
}

window.addEventListener("resize", enableSlider);
window.addEventListener("load", enableSlider);



document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".new-products");
  const prevButn = document.querySelector(".slider-btn-prev");
  const nextButn = document.querySelector(".slider-btn-next");
  const slides = document.querySelectorAll(".new-products li");

  let index = 0;
  let slideWidth;

  function updateValues() {
    slideWidth = slides[0].offsetWidth + 20;
  }
  function updateSlider() {
      slider.style.transform = `translateX(${-index * slideWidth}px)`;
      slider.style.transform = "none"; // прибираємо зсув на великих екранах
      index = 0;
    }
  }

  nextButn.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      if (index < slides.length - 1) {
        index++;
        updateSlider();
      }
    }
  });

  prevButn.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      if (index > 0) {
        index--;
        updateSlider();
      }
    }
  });

  window.addEventListener("resize", () => {
    updateValues();
    updateSlider();
  });

  updateValues();
  updateSlider();
});
