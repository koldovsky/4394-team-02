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

	//slider

	$(document).ready(function () {
		initWinesSlider();
	});

	document.body.addEventListener("htmx:afterSwap", function (event) {
		if ($(event.target).find(".wines__block").length > 0) {
			initWinesSlider();
		}
	});

	// 3️⃣ Функція ініціалізації slick
	function initWinesSlider() {
		if ($(".wines__block").hasClass("slick-initialized")) {
			return;
		}

		$(".wines__block").slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-prev"><img src="img/best-deals/arrow-left.svg"  alt="Previous"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="img/best-deals/arrow-right.svg" alt="Next"></button>',

			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						arrows: false,
					},
				},
				{
					breakpoint: 1034,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						arrows: false,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
					},
				},
			],
		});
	}
});

