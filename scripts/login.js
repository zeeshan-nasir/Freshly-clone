let userData = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("#loginBtn").addEventListener("click", () => {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if (email == "") {
        alert("Please fill the email id properly!")
    }
    else if (password == "") {
        alert("Please fill the password field!")
    }
    else if (email !== "" && password !== "") {
        window.location.href = "plan.html";
        let obj = {
            email: email,
            password: password
        }
        obj.push(userData);
        localStorage.setItem("userData",JSON.stringify(userData));
        window.location.href = "otp.html";
    }
});

document.querySelector("#signUpBtn").addEventListener("click", () => {
    window.location.href = "signUp.html";
});