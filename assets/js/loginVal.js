document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("loginBtn");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    // Create a dynamic error box
    let errorBox = document.createElement("div");
    errorBox.id = "errorBox";
    errorBox.style.color = "red";
    errorBox.style.marginBottom = "10px";
    errorBox.style.fontSize = "14px";
    errorBox.style.textAlign = "left";
    document.querySelector(".login-form").prepend(errorBox);

  
    // Prevent form default submission
    document.querySelector(".login-form").addEventListener("submit", function(e) {
        e.preventDefault();
        validateLogin();
    });


    function validateLogin() {

        let emailValue = email.value.trim();
        let passValue = password.value.trim();

        // Reset Error Box
        errorBox.textContent = "";


        // Empty Check
        if (emailValue === "" || passValue === "") {
            errorBox.textContent = "⚠ All fields are required!";
            return;
        }

        // Email Valid Check
        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            errorBox.textContent = "⚠ Please enter a valid email!";
            return;
        }

        // Fake Login Check (You can replace with API)
        if (emailValue === "mahim@gmail.com" && passValue === "123456") {

            errorBox.style.color = "green";
            errorBox.textContent = "✔ Login successful! Redirecting...";

            setTimeout(() => {
                window.location.href="../view/student.html";
            }, 1200);

        } else {
            errorBox.style.color = "red";
            errorBox.textContent = "❌ Incorrect email or password!";
        }

        if (emailValue === "admin@gmail.com" && passValue === "111111") {

            errorBox.style.color = "green";
            errorBox.textContent = "✔ Login successful! Redirecting...";

            setTimeout(() => {
                window.location.href="../view/admin.html";
            }, 1200);

        } else {
            errorBox.style.color = "red";
            errorBox.textContent = "❌ Incorrect email or password!";
        }
    }

});
