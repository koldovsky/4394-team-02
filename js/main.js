document.addEventListener("DOMContentLoaded", () => {
	//hamburger
	function initHamburger() {
		const hamburger = document.querySelector(".hamburger");
		const menu = document.querySelector(".header__menu");
		const social = document.querySelector(".header__block");

		if (!hamburger || !menu || !social) return;

		hamburger.addEventListener("click", () => {
			hamburger.classList.toggle("active");
			menu.classList.toggle("active");
			social.classList.toggle("active");
		});
	}

	
	document.addEventListener("DOMContentLoaded", initHamburger);

	
	document.body.addEventListener("htmx:afterSwap", (e) => {
		if (e.target.classList.contains("header")) {
			initHamburger();
		}
	});
});
