window.addEventListener('DOMContentLoaded', function () {
    var endTime = new Date(2019, 1, 22).getTime();

    function countdown() {
        var daysField = document.querySelector('.days');
        var hoursField = document.querySelector('.hours');
        var minutesField = document.querySelector('.minutes');
        var secondsField = document.querySelector('.seconds');
        var now = new Date().getTime();
        var remainTime = endTime - now;

        if (remainTime > 0) {
            var seconds = Math.floor((remainTime / 1000) % 60);
            var minutes = Math.floor((remainTime / (1000 * 60)) % 60);
            var hours = Math.floor((remainTime / (1000 * 60 * 60)) % 24);
            var days = Math.floor(remainTime / (1000 * 60 * 60 * 24));

            daysField.textContent = days;
            hoursField.textContent = hours;
            minutesField.textContent = minutes;
            secondsField.textContent = seconds;
        } else {
            clearInterval(countdownTimer);
            hoursField.textContent = '00';
            minutesField.textContent = '00';
            secondsField.textContent = '00';
        }
    }
    let countdownTimer = setInterval(countdown, 1000);
});