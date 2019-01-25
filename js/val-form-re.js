document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zip').addEventListener('blur', validateZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

function validateName() {
	const name = document.querySelector('#name');
	const re = /^[a-zA-Zа-яА-ЯёЁ]{1}[a-zA-Zа-яА-ЯёЁ0-9]{2,14}$/;

	if (!re.test(name.value)) {
		name.classList.add('is-invalid');
	} else {
		name.classList.remove('is-invalid');
	}
}

function validateZip() {
	const zip = document.querySelector('#zip');
	const re = /^\d{6}$/;

	if (!re.test(zip.value)) {
		zip.classList.add('is-invalid');
	} else {
		zip.classList.remove('is-invalid');
	}
}

function validateEmail() {
	const email = document.querySelector('#email');
	const re = /^([a-zA-Zа-яА-ЯёЁ0-9_\-\.]+)@([a-zA-Zа-яА-ЯёЁ0-9_\-\.]+)\.([a-zA-zа-яА-ЯёЁ]{2,5})$/;

	if (!re.test(email.value)) {
		email.classList.add('is-invalid');
	} else {
		email.classList.remove('is-invalid');
	}
}

function validatePhone() {
	const phone = document.querySelector('#phone');
	const re = /^(\+)?[78][(\()-. ]?\d{3,4}[(\))-. ]?([(\()-. ]?\d{3}[(\))-. ]?[(\()-. ]?\d{2}[(\))-. ]?[(\()-. ]?\d{2})?$/;

	if (!re.test(phone.value)) {
		phone.classList.add('is-invalid');
	} else {
		phone.classList.remove('is-invalid');
	}
}
