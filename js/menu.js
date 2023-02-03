const header = document.querySelector(".header");
const menuToggler = document.querySelector(".header__menu-toggler");

menuToggler.addEventListener("click", function () {
  if (header.classList.contains("header--menu-closed")) {
    header.classList.remove("header--menu-closed");
    header.classList.add("header--menu-opened");
  } else {
    header.classList.remove("header--menu-opened");
    header.classList.add("header--menu-closed");
  }
});