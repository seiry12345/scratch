$.ajax({
	type: 'POST',
	url: 'ajax/ajax.php',
	data: msg,
	success: function (response) {
		if (response == "OK") {
			swal({title: "Заявка отправлена!", text: "Мы свяжемся с вами в самое ближайшее время.", type: "success", confirmButtonColor: "8ABA0A", confirmButtonText: "Закрыть"});
		} else {
			swal({title: "Ошибка!", text: "При отправке сообщения произошла ошибка. Попробуйте связаться с нами по телефону.", type: "error", confirmButtonColor: "8ABA0A", confirmButtonText: "ОК"});
		}
	},
	error: function (xhr, str) {
		swal({title: "Ошибка!", text: "При отправке сообщения произошла ошибка. Попробуйте связаться с нами по телефону.", type: "error", confirmButtonColor: "8ABA0A", confirmButtonText: "ОК"});
	},
	complete: function () {
		$(_this).removeAttr('disabled');
		$('.button.call-button-submit').val('Отправить');
		$('.modal-call-close').trigger('click');
	}
});