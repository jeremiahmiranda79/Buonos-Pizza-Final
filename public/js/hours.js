var checkOpenStatus = function () {
  var d = new Date();
  var date = d.getHours();
  var day = d.getDay();

  // var signClosed = `<img src="/images/sign-closed.jpg" />`;

  // const myElement = document.getElementById("open-closed");
  // myElement.textContent = "/images/sign-closed.jpg";


  if ((date > 9) && (date < 20) && (day != 0)) {
      // y = "<span style=\"color:#07ed11\">We're Open!</span>";

      // y = "<img src="/images/sign-hours.jpg" />
      alert("open");
      // <img src="/images/sign-open.jpg" alt=""></img>
      

  } else {
      // y = "<span style=\"color:#fc4b1c\">Sorry we're Closed.</span>";
      // signClosed;
      alert("closed");
      // <img src="/images/sign-closed.jpg" alt=""></img>


  //     const myElement = document.getElementById("open-closed");
  // myElement.textContent = signClosed;


  // document.getElementById('open-close') 

  // document.getElementById("open-close").innerHTML = y;
  // setTimeout(checkOpenStatus,15000);
  }
};

checkOpenStatus();