window.onscroll = function showHeader() {

	var nav = document.querySelector('.nav');

	if (window.pageYOffset > 75){
		nav.classList.add('nav_fixed');
	 } else {
	 	nav.classList.remove('nav_fixed');
	}
}
