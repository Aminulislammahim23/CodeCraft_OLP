document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  

    let errorBox = document.createElement("div");
    errorBox.id = "errorBox";
    errorBox.style.color = "red";
    errorBox.style.marginBottom = "10px";
    errorBox.style.fontSize = "14px";
    errorBox.style.textAlign = "left";
    document.querySelector(".login-form").prepend(errorBox);

  
    
    document.querySelector(".login-form").addEventListener("submit", function(e) {
        e.preventDefault();
        validateLogin();
    });


    function validateLogin() {

        let emailValue = email.value.trim();
        let passValue = password.value.trim();

        
        errorBox.textContent = "";


        if (emailValue === "" || passValue === "") {
            errorBox.textContent = "⚠ All fields are required!";
            return;
        }

        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            errorBox.textContent = "⚠ Please enter a valid email!";
            return;
        }

    }

});
