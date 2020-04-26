$("#search").keyup(function () {
	$.each($("table tr, table td, table th"), function () {
		if ($(this).text().toLowerCase().indexOf($(this).val().toLowerCase()) === -1)
			$(this).hide();
		else
			$(this).show();
	});
});
