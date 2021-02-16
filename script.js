document.addEventListener('DOMContentLoaded', () => {


  var slider = document.getElementById("rate");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  slider.oninput = function val() {
    output.innerHTML = this.value;
  }
  });


  function compute() {

    principal = document.getElementById("principal").value;
    if (principal <= 0) {
      error = document.getElementById("errormsn");
      error.innerHTML = "Enter a positive number"
    } else {
      rate = document.getElementById("rate").value;
      years = document.getElementById("years").value;

      interest = principal * years * rate / 100;

      var d = new Date();
      var n = parseInt(d.getFullYear());
      years = parseInt(years) + n;

      deposit = document.getElementById("deposit");
      deposit.innerHTML = "If you deposit " + principal;

      interestrate = document.getElementById("interestrate");
      interestrate.innerHTML = "at an interest rate " + rate;

      receive = document.getElementById("receive");
      receive.innerHTML = "You will receive an amount of " + interest;

      result = document.getElementById("result");
      result.innerHTML = "The expected year is " + years;
    }

  }
