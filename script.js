const menu_slider = document.querySelector(".menu-slider");
const navbar = document.querySelector(".navbar");
const menu_slider_close = document.querySelector(".menu-slider-close");
menu_slider.addEventListener('click', () => {
	navbar.style.display = "block";
	menu_slider_close.style.display = "block";
	menu_slider.style.display = "none";
});

menu_slider_close.addEventListener('click', () => {
	navbar.style.display = "none";
	menu_slider_close.style.display = "none";
	menu_slider.style.display = "block";
});



