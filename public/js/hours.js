var checkOpenStatus = function () {
  var d = new Date();
  
  var hour = d.getHours();
  var minute = d.getMinutes().toString().padStart(2, "0");
  var second = d.getSeconds().toString().padStart(2, "0");

  var day = d.getDay();

  var hourTxt = 0;

  //#region (make function)
  if ((day == 0) && (hour >= 12 && hour <= 20)) {
    document.getElementById('open-close').src="/images/sign-open.jpg";
  }
  else if (day == 1) {
    document.getElementById('open-close').src="/images/sign-closed.jpg";
  }
  else if ((day == 2) && (hour >= 11 && hour <= 20)) {
    document.getElementById('open-close').src="/images/sign-open-2.jpg";
  }
  else if ((day == 3) && (hour >= 11 && hour <= 21)) {
    document.getElementById('open-close').src="/images/sign-open-2.jpg";
  }
  else if ((day == 4) && (hour >= 11 && hour <= 21)) {
    document.getElementById('open-close').src="/images/sign-open-2.jpg";
  }
  else if ((day == 5) && (hour >= 11 && hour <= 22)) {
    document.getElementById('open-close').src="/images/sign-open-2.jpg";
  }
  else if ((day == 6) && (hour >= 11 && hour <= 22)) {
    document.getElementById('open-close').src="/images/sign-open-2.jpg";
  }
  else {
    document.getElementById('open-close').src="/images/sign-closed-2.jpg";
  }
  //#endregion

  document.getElementById('date').textContent = d.toDateString();

  //#region (make function)
  if (hour == 0) {
    hourTxt = 12;
    document.getElementById('time').textContent = hourTxt + ":" + minute + ":" + second + " AM";
  }
  else if (hour > 0 && hour < 11) {
    hourTxt = hour;
    document.getElementById('time').textContent = hourTxt + ":" + minute + ":" + second + " AM";
  }
  else if (hour == 11) {
    hourTxt = 12;
    document.getElementById('time').textContent = hourTxt + ":" + minute + ":" + second + " PM";
  }
  else if (hour > 12 && hour <= 23) {
    hourTxt = hour - 12;
    document.getElementById('time').textContent = hourTxt + ":" + minute + ":" + second + " PM";
  }
  //#endregion
};

setInterval(checkOpenStatus, 1000);
checkOpenStatus();