//navbar
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

//scroll bar
let progress = document.getElementById ('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}

//carrousel 
const grande  =document.querySelector('.grande')
const punto   =document.querySelectorAll('.punto')

//carrousel y puntos para 3 divisiones

punto.forEach( ( cadaPunto , i )=> {
	punto[i].addEventListener('click',()=>{

		let posicion = i
		let operacion = posicion * -33

		grande.style.transform = `translateX(${ operacion }%)`

		punto.forEach(( cadaPunto , i )=>{
			punto[i].classList.remove('activo')
		})
		punto[i].classList.add('activo')
	})
})