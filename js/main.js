const menuIcon = document.querySelector('.header .links');
const landing = document.querySelector('.landing');
const header = document.querySelector('.header');

menuIcon.addEventListener('click', function () {
	this.classList.toggle('show-links');
});

landing.addEventListener('click', function () {
	menuIcon.classList.remove('show-links');
});
