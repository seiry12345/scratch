var discountDate = new Date(2019, 01, 22).getTime();

  function countdown() {
      var daysField = document.querySelector('#days');
      var hoursField = document.querySelector('#hours');
      var minutesField = document.querySelector('#minutes');
      var secondsField = document.querySelector('#seconds');
      var now = new Date().getTime();
      var remainTime = discountDate - now;
      var seconds = Math.floor(remainTime / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
      
      hours %= 24;
      minutes %= 60;
      seconds %= 60;
      
      hours = (hours < 10) ? '0' + hours : hours;
      minutes = (minutes < 10) ? '0' + minutes : minutes;
      seconds = (seconds < 10) ? '0' + seconds : seconds;


      daysField.textContent = days;
      hoursField.textContent = hours;
      minutesField.textContent = minutes;
      secondsField.textContent = seconds;
  }

  setInterval(countdown, 1000);