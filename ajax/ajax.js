$('.front-form').submit(function (e) {
    e.preventDefault();
    var phone = $(this).find("input[name = 'phone']").val();
    var formDate = $(this).find("input[name = 'date']").val();
    var msg = $(this).serialize();
    $.ajax({
      url: "/ajax/callback.php",
      type: "POST",
      dataType: "json",
      data: msg,
      success: function (response) {
        Swal({
          type: response.type,
          title: response.title,
          text: response.message
        });

      },
      error: function (xhr, str) {
        Swal({
          type: response.type,
          title: response.title,
          text: response.message,
          footer: '<div>Возникла ошибка:' + xhr.responseCode + '</div>'
        });
      }
    });
    return false;
  });
