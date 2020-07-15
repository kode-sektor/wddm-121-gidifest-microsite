/*MAIN.JS*/


const swingModal = (close) => {
	if (close) {
		modalForm.classList.remove('swing');
	} else {
		modalForm.classList.add('swing');
		nameInput.focus();
	}
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