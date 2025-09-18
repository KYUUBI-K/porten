const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-menu-list");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

const newProducts = document.querySelector(".new-products");
const newPrevBtn = document.querySelector(".slider-btn.prev");
const newNextBtn = document.querySelector(".slider-btn.next");
const newItems = document.querySelectorAll(".new-products li");

let newIndex = 0;
let slideWidth = newItems[0].offsetWidth; // ширина одного слайда

function updateSlideWidth() {
  slideWidth = newItems[0].offsetWidth; // оновлюємо при зміні екрану
}

function showNewSlide(i) {
  if (i < 0) newIndex = newItems.length - 1;
  else if (i >= newItems.length) newIndex = 0;
  else newIndex = i;

  newProducts.style.transform = `translateX(-${newIndex * slideWidth}px)`;
}

function enableNewSlider() {
  newPrevBtn.addEventListener("click", () => showNewSlide(newIndex - 1));
  newNextBtn.addEventListener("click", () => showNewSlide(newIndex + 1));
  newProducts.style.transform = "translateX(0)";
}

// слідкуємо за зміною екрану
window.addEventListener("resize", () => {
  updateSlideWidth();
  showNewSlide(newIndex);
});

window.addEventListener("load", () => {
  updateSlideWidth();
  enableNewSlider();
});
