const navToggle = document.querySelector(".header .contenedor_menu_header #navbar .nav-toggle");
const navMenu = document.querySelector(".header .contenedor_menu_header #navbar .nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});