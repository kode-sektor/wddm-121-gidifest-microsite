/*MAIN.JS*/

// Get the pages
const homePage = document.querySelectorAll('#home');
const profilePage = document.querySelectorAll('#profile');

const slideBtns = document.querySelectorAll('.hero .slider-control');


// Target specific page
if (homePage.length > 0) {
	
	/*Slider Function*/

	const slider = (e, section) => {

	  	let dir = (e.target).classList.contains('left') ? 'left' : 'right';	// left or right control?
	  	let poster = '',
	  		artistes = '',
	  		sliderID = '';

  		poster = (e.target).parentNode;
  		sliderID =  poster.id;

		if (section === 'hero') {
			artistes = document.querySelector(`#${sliderID}`).querySelectorAll('.poster');
		} else {
			// Get the sliders for artiste collection
			artistes = document.querySelector(`#${sliderID}`).querySelectorAll('.artistes > li');
		}

		// Add helper class to transform both sliders
		if (dir === 'right') {
			artistes.forEach((slider) => {
				slider.classList.remove('slide-left');
				slider.classList.add('slide-right');
			});

			// Set indicator to first element if right nav button is clicked

			if (section === 'artiste-collection') {
				document.querySelector(`#${sliderID}`).querySelector('.current').classList.remove('current');
				document.querySelector(`#${sliderID}`).querySelector('.slide-counter').querySelector('li:last-child').classList.add('current');

				// Set current slider gauge
				document.querySelector(`#${sliderID}`).querySelector('.artiste-controls .bar').style.width = '100%';
			} else {
				// Target only the nav controls in Hero section
				// Style background of buttons to red when right is clicked
				slideBtns.forEach((btn) => {
					btn.classList.add('slide');
				});

			}
			

		} else {

			// Add helper class to transform both sliders
			artistes.forEach((slider) => {
				slider.classList.remove('slide-right');
				slider.classList.add('slide-left');
			});

			if (section === 'artiste-collection') {
				// Set indicator to first element if left nav button is clicked
				document.querySelector(`#${sliderID}`).querySelector('.current').classList.remove('current');
				document.querySelector(`#${sliderID}`).querySelector('.slide-counter').querySelector('li:first-child').classList.add('current');

				// Set current slider gauge
				document.querySelector(`#${sliderID}`).querySelector('.artiste-controls .bar').style.width = '50%';
			} else {
				// Target only the nav controls in Hero section
				// Style background of buttons to red when right is clicked
				slideBtns.forEach((btn) => {
					btn.classList.remove('slide');
				});
			}
		}
	
	}


	// Hero slider

	const heroSliderBtn = document.querySelectorAll('.hero .slider-control');	// slider control

	heroSliderBtn.forEach((control) => {	// loop across
		control.addEventListener('click', (e) => {	// listen for click event
			slider(e, 'hero');
		});	
	});

	// Artiste collection slider

	const sliderBtn = document.querySelectorAll('.artiste-collection .slider-control');	// slider control

	sliderBtn.forEach((control) => {	// loop across
		control.addEventListener('click', (e) => {	// listen for click event
			slider(e, 'artiste-collection');
		});	
	});

}
		

/*PROFILE PAGE*/

if (profilePage.length > 0) {

	const swingModal = (close) => {
		if (close) {
			modalForm.classList.remove('swing');
		} else {
			modalForm.classList.add('swing');
			nameInput.focus();
		}
	}

	const slide = () => {

	}

	const cta = document.querySelectorAll('.ticket-link');
	const closeBtn = document.querySelector('#ticket-close');
	const modalForm = document.querySelector('#ticket-modal-container');
	const nameInput = document.querySelector('#name');



	/*Pop up modal on click of 'Purchase button'*/
	cta.forEach((button) => {
	  button.addEventListener('click', (e) => {
	  	e.preventDefault();
	  	swingModal();
	  });
	});

	closeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		swingModal('close');
	});

}

/*ALL PAGES*/

const toggleBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.main-nav-links');

// Listen to click of 'toggle' button and add class that toggles nav opacity
toggleBtn.addEventListener('click', (e) => {
	nav.classList.toggle('reveal');
});
