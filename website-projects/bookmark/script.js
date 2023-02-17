let resizeTimer;
let collapseTimer;
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

hamburger.addEventListener('click', function () {
	header.classList.toggle('menu__mobile--active');
});

window.addEventListener('resize', function () {
	const width = this.window.innerWidth;
	if (width > 768) {
		this.clearTimeout(resizeTimer);
		this.document.documentElement.classList.add('no-animation');
		header.classList.remove('menu__mobile--active');
		resizeTimer = this.setTimeout(() => {
			this.document.documentElement.classList.remove('no-animation');
		}, 200);
	}
});

// accordion
let accordionActive;
const accordionItems = [...document.querySelectorAll('.accordion-item')];
const accordionContents = [...document.querySelectorAll('.accordion-content')];

const accordionContentHeights = accordionContents.map((item, index) => {
	const height = item.getBoundingClientRect().height;
	accordionContents[index].style.height = `0px`;
	return height;
});

accordionItems.forEach((accordion, index) =>
	accordion.addEventListener('click', function (e) {
		if (!e.target.closest('.accordion-header')) return;
		accordion.classList.add('show');
		accordionActive = accordionActive !== accordion ? accordion : null;

		collapseAccordions();
	}),
);

function collapseAccordions() {
	for (const [index, accordion] of accordionItems.entries()) {
		if (accordion.classList.contains('show')) {
			if (accordion === accordionActive) {
				accordionContents[
					index
				].style.height = `${accordionContentHeights[index]}px`;
			} else {
				accordion.classList.remove('show');
				accordionContents[index].style.height = `0px`;
			}
		}
	}
}
// collapseAccordions();
