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
  const prevBtn = document.querySelector(".slider-btn-prev");
  const nextBtn = document.querySelector(".slider-btn-next");
  const slides = document.querySelectorAll(".new-products li");

  let index = 0;
  let slideWidth;

  function updateValues() {
    slideWidth = slides[0].offsetWidth + 20; // ширина + gap
  }
