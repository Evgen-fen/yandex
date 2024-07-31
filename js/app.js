// block_stages-Slider//

let currentSlideIndex = 0;
showSlides(currentSlideIndex);

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlides(currentSlideIndex);
}

function changeSlide(step) {
    currentSlideIndex += step;
    showSlides(currentSlideIndex);
}

// block_participans-Slider (desktop)//



	let position = 0;
	let screenSize = window.innerWidth;  // or any other method to get the screen size
	let result = (screenSize >= 890) ? 3 : (screenSize <= 880) ? 1 : 0;  // Default or any other value if neither condition is met
	console.log(result);
	const slidesToShow = result;
	const slidesToScroll = 1;
	const container = document.querySelector('.participans_slider');
	const track = document.querySelector('.slider-track');
	const items = document.querySelectorAll('.slider-item');
	const btnPrev = document.querySelector('.btn-prev');
	const btnNext = document.querySelector('.btn-next');
	const sliderButtons = document.querySelectorAll('[data-button-slider]');
	const itemsCount = items.length;
	const itemWidth = container.clientWidth / slidesToShow;
	const movePosition = slidesToScroll * itemWidth;

// Slider elements //

	items.forEach((item) => {
		item.style.minWidth = `${itemWidth}px`;
	});

	btnNext.addEventListener('click', () => {
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
	 	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	btnPrev.addEventListener('click', () => {
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	const setPosition = () => {
		track.style.transform = `translateX(${position}px)`;
	};

	const checkBtns = () => {
		btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
	  btnPrev.disabled = position === 0;
	};
	
	checkBtns();
	setPosition();
	
	
	// Slider numbers //

	sliderButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const direction = button.dataset.buttonSlider === "next" ? 1 : -1;
			const slideNumbers = button.closest("[data-slider-nav]").querySelector("[data_number]");
			const activeNumber = slideNumbers.querySelector("[data-active]");
			const newActiveNumber = [...slideNumbers.children].indexOf(activeNumber) + direction
	
			if (newActiveNumber < 0) newActiveNumber = slideNumbers.children.length - 1
			if (newActiveNumber >= slideNumbers.children.length) newActiveNumber === 0

			slideNumbers.children[newActiveNumber].dataset.active = true;
			delete activeNumber.dataset.active;
		});
	});
		
	document.addEventListener('DOMContentLoaded', () => {
		const slider = document.querySelector('.track');
		const slides = document.querySelectorAll('.track-text');
		const totalSlides = slides.length / 2;
	
		let slideWidth = 0;
		slides.forEach(slide => {
				slideWidth -= slide.offsetWidth;
		});
	
		slider.style.width = `${slideWidth}px`;
	});
	



	