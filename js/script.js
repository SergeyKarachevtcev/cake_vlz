/* swiper test */

var swiper = new Swiper(".swiper", {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		// Add the navigation option
		nextEl: ".swiper-button-next", // Specify the right button
		prevEl: ".swiper-button-prev", // Specify the left button
	},
});

/* mobile */
/* включение бургера , анимация кнопки , включению меню мобильного */
/* const burger = document.querySelector(".burger");
const navListMob = document.querySelector(".header_nav_list_mob");

burger.addEventListener("click", function () {
	burger.classList.toggle("active");
	navListMob.classList.toggle("open");
}); */


const burger = document.querySelector(".burger");
const navListMob = document.querySelector(".header_nav_list_mob");

burger.addEventListener("click", function () {
	burger.classList.toggle("active");
	navListMob.classList.toggle("open");
});

const mobileMenuLinks = document.querySelectorAll(".header_nav_list_mob .nav_list_link");

mobileMenuLinks.forEach((link) => {
	link.addEventListener("click", function (event) {
		event.preventDefault();
		const targetId = this.getAttribute("href");
		const targetElement = document.querySelector(targetId);

		if (targetElement) {
			burger.classList.remove("active");
			navListMob.classList.remove("open");

			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: "smooth",
			});
		}
	});
});

/*  добавили обработчик событий click для каждой якорной ссылки в мобильном меню. Внутри обработчика мы отменяем стандартное действие ссылки с помощью event.preventDefault(). Затем мы получаем идентификатор целевого элемента из атрибута href ссылки и находим этот элемент с помощью querySelector(). Если элемент найден, мы прокручиваем страницу к указанному элементу с использованием window.scrollTo(). После этого мы также удаляем классы active и open у бургера и мобильного меню, чтобы закрыть меню.

Теперь, при нажатии на якорную ссылку в мобильном меню, меню будет закрываться, а страница будет плавно прокручиваться к указанному разделу */

// Tabs
// Вызываем функцию openTab() для отображения вкладки "Доставка" и скрытия остальных вкладок

function openTab(event, tabName) {
	var i, tabcontent, tablinks;
	// Скрываем все элементы с классом "tab_content"
	tabcontent = document.getElementsByClassName("tab_content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	// Удаляем класс "active" со всех кнопок с классом "tablinks"
	tablinks = document.getElementsByClassName("tab_linck");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove("active-btn");
	}
	// Отображаем текущую вкладку и добавляем класс "active" к кнопке, которая открывает эту вкладку
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.classList.add("active-btn");
}

/* плавная прокрутка */

// Получаем все якорные ссылки на странице
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Обрабатываем каждую якорную ссылку
anchorLinks.forEach((link) => {
	link.addEventListener("click", smoothScroll);
});

// Функция для плавной прокрутки
function smoothScroll(event) {
	event.preventDefault();

	const targetId = this.getAttribute("href");
	const targetElement = document.querySelector(targetId);

	if (targetElement) {
		window.scrollTo({
			top: targetElement.offsetTop,
			behavior: "smooth",
		});
	}
}

/* мобильные ссылки */

