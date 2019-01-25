let loanForm = document.querySelector('#loan-form');



loanForm.addEventListener('submit', function (e) {
	document.querySelector('#results').style.display = 'none';
	document.querySelector('#loading').style.display = 'block';

	setTimeout(calculateResults, 2000);

	e.preventDefault();
});

function calculateResults(e) {
	const amount = document.querySelector('#amount');
	const interest = document.querySelector('#interest');
	const years = document.querySelector('#years');
	const monthlyPayment = document.querySelector('#monthly-payment');
	const totalPayment = document.querySelector('#total-payment');
	const totalInterest = document.querySelector('#total-interest');

	const principal = parseFloat(amount.value);
	const calcutatedInterest = parseFloat(interest.value) / 100 / 12;
	const calcutatedPayments = parseFloat(years.value) * 12;

	const x = Math.pow(1 + calcutatedInterest, calcutatedPayments);
	const monthly = (principal * x * calcutatedInterest) / (x - 1);

	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calcutatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calcutatedPayments) - principal).toFixed(2);
		document.querySelector('#results').style.display = 'block';
		document.querySelector('#loading').style.display = 'none';
	} else {
		showError('Please check ur numbers');
	}
}

function showError(error) {
	const errorDiv = document.createElement('div');
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');

	document.querySelector('#results').style.display = 'none';
	document.querySelector('#loading').style.display = 'none';
	errorDiv.className = 'alert alert-danger';
	errorDiv.appendChild(document.createTextNode(error));
	card.insertBefore(errorDiv, heading);
	setTimeout(clearError, 3000);
}

function clearError() {
	document.querySelector('.alert').remove();
}
