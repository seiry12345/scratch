$("#search").keyup(function () {
		_this = this;
		$.each($("table tr, table td, table th"), function () {
			if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
				$(this).hide();
			else
				$(this).show();
		});
	});
