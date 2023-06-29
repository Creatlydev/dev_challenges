
let icon_menu = document.querySelector(".icon-menu__content");
let navbar = document.querySelector(".nav__content");

icon_menu.addEventListener("click", () => {
  navbar.classList.toggle("nav__content_open");
});
