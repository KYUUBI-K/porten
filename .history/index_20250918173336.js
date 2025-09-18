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
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
}

window.addEventListener("resize", enableSlider);
window.addEventListener("load", enableSlider);
