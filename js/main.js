/*MAIN.JS*/

// Get the pages
const homePage = document.querySelectorAll('#home');
const profilePage = document.querySelectorAll('#profile');


// Target specific page
if (homePage.length > 0) {
	
	/*Slider*/

	const sliderBtn = document.querySelectorAll('.slider-control');	// slider control

	sliderBtn.forEach((control) => {	// loop across

	    control.addEventListener('click', (e) => {	// listen for click event

		  	let dir = (e.target).classList.contains('left') ? 'left' : 'right';	// left or right control?
			
			const poster = (e.target).parentNode;	// get parent section
			const slider = poster.id;	// get parent section id

			// get the sliders
			const artistes = document.querySelector(`#${slider}`).querySelectorAll('.artistes > li');	

			// Add helper class to transform both sliders
			if (dir === 'right') {
				artistes.forEach((slider) => {
					slider.classList.remove('slide-left');
					slider.classList.add('slide-right');
				});

				// Set indicator to first element if right nav button is clicked
				document.querySelector(`#${slider}`).querySelector('.current').classList.remove('current');
				document.querySelector(`#${slider}`).querySelector('.slide-counter').querySelector('li:last-child').classList.add('current');

				// Set current slider gauge
				document.querySelector(`#${slider}`).querySelector('.artiste-controls .bar').style.width = '100%';

			} else {

				// Add helper class to transform both sliders
				artistes.forEach((slider) => {
					slider.classList.remove('slide-right');
					slider.classList.add('slide-left');
				});

				// Set indicator to first element if left nav button is clicked
				document.querySelector(`#${slider}`).querySelector('.current').classList.remove('current');
				document.querySelector(`#${slider}`).querySelector('.slide-counter').querySelector('li:first-child').classList.add('current');

				// Set current slider gauge
				document.querySelector(`#${slider}`).querySelector('.artiste-controls .bar').style.width = '50%';
			}

		});
		
	});
	
};


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