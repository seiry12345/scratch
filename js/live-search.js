$("#search").keyup(function () {
	_this = this;
	$.each($("table tr, table td, table th"), function () {
		if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
			$(this).hide();
		else
			$(this).show();
	});
});


var search = document.querySelector('#search');
var someItems;

search.addEventListener('input', filter);

function filter(e) {
let someItem = Array.from(someItem);
someItem.forEach(function(elem) {
	let elemText = elem.textContent.toLowerCase();
	if(elemText.indexOf(filterVal.toLowerCase()) == -1) {
		elem.style.display = 'none';
	} else {
		elem.style.display = 'block';
	}

	if(filterVal == '') {
		elem.style.display = 'block';
	}
});
}