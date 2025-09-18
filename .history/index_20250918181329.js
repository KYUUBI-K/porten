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

const newProducts = document.querySelector(".new-products");
const newPrevBtn = document.querySelector(".slider-btn.prev");
const newNextBtn = document.querySelector(".slider-btn.next");
const newItems = document.querySelectorAll(".new-products li");

let newIndex = 0;

function showNewSlide(i) {
  if (i < 0) newIndex = newItems.length - 1;
  else if (i >= newItems.length) newIndex = 0;
  else newIndex = i;

  newProducts.style.transform = `translateX(-${newIndex * 100}%)`;
}

function enableNewSlider() {
  newPrevBtn.addEventListener("click", () => showNewSlide(newIndex - 1));
  newNextBtn.addEventListener("click", () => showNewSlide(newIndex + 1));
  newProducts.style.transform = "translateX(0)";
}

window.addEventListener("resize", enableNewSlider);
window.addEventListener("load", enableNewSlider);
