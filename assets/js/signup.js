document.getElementById("signupForm").addEventListener("submit", function (e) {

    let valid = true;

   
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();
    let terms = document.getElementById("terms").checked;

   
    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

   
    if (fullName.length < 3) {
        document.getElementById("nameError").innerHTML = "Full name must be at least 3 characters.";
        valid = false;
    }

   
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email address.";
        valid = false;
    }

    
    let userPattern = /^[a-zA-Z0-9_]{3,}$/;
    if (!userPattern.test(username)) {
        document.getElementById("userError").innerHTML = "Username must be at least 3 characters (letters, numbers, underscores only).";
        valid = false;
    }

    
    if (password.length < 8) {
        document.getElementById("passError").innerHTML = "Password must be at least 8 characters.";
        valid = false;
    }

   
    if (password !== confirmPassword) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match.";
        valid = false;
    }

   
    let phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(contact)) {
        document.getElementById("contactError").innerHTML = "Enter a valid phone number (10–15 digits).";
        valid = false;
    }

   
    if (address.length < 5) {
        document.getElementById("addressError").innerHTML = "Address must be at least 5 characters.";
        valid = false;
    }

    
    if (!terms) {
        document.getElementById("termsError").innerHTML = "You must agree to the terms & conditions.";
        valid = false;
    }

    
    if (!valid) {
        e.preventDefault();
    }

});
