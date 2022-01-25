document.querySelector("#signUpForm").addEventListener("submit", (event) => {
  event.preventDefault();

  var input1 = document.querySelector("#email").value;
  var input2 = document.querySelector("#zipCode").value;

  if (input1 == "") {
    alert("Email must be filled out");
  }

  else if (input2 == "") {
    alert("ZIP code must be filled out");
  }

  else if (input1 !== "" && input2 !== "") {
    window.location.href = "plan.html";
  }
});