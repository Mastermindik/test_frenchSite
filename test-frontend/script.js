const searchBtn = document.getElementById("btn-search");
const menuBtn = document.getElementById("btn-menu");
const burgerMenuBtn = document.getElementById("burger");
const header = document.getElementById("header");
const img = document.getElementById("img");
const wrapper = document.getElementById("wrapper");
const popupOverlay = document.getElementById("popup-overlay");
const btnToForm = document.getElementById("to-form");
const comments = document.getElementById("comments");
let popupWasOpen = false;

function scroll() {
  document.getElementById("order_form").scrollIntoView();
}

searchBtn.onclick = () => scroll();
menuBtn.onclick = () => scroll();
burgerMenuBtn.onclick = () => scroll();

document.addEventListener("scroll", () => {
  const width = window.getComputedStyle(img).minWidth;
  const height = window.getComputedStyle(wrapper).height;
  if (window.scrollY >= header.scrollHeight) {
    wrapper.style.height = "3.5rem";
    img.style.minWidth = "1rem";
  } else {
    wrapper.style.height = height;
    img.style.minWidth = width;
  }
  if (comments.getBoundingClientRect().top - window.innerHeight <= 0 && popupWasOpen) {
    popupOverlay.style.display = "flex";
  }
});

btnToForm.onclick = () => {
  popupOverlay.style.display = "none";
  popupWasOpen = true;
  scroll();
};