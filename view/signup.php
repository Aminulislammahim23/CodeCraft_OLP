<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCraft – Create Account</title>
    <link rel="stylesheet" href="../assets/css/signup.css">
</head>
<body>

<div class="signup-container">

    <div class="left-panel">
        <div class="brand">
            <img src="../assets/img/logo.png" alt="CodeCraft Logo" class="brand-logo">
        </div>

        <span class="brand-name">CodeCraft</span>
        <h1>Create Your Account</h1>
        <p class="subtitle">Start learning and track your coding journey.</p>

        <form class="signup-form" id="signupForm" method="post" action="signup_process.php">

            <label>Full Name</label>
            <input type="text" id="fullName" name="fullName" required>
            <p class="error" id="nameError"></p>

            <label>Email</label>
            <input type="email" id="email" name="email" required>
            <p class="error" id="emailError"></p>

            <label>Username</label>
            <input type="text" id="username" name="username" required>
            <p class="error" id="userError"></p>

            <label>Password</label>
            <input type="password" id="password" name="password" minlength="8" required>
            <p class="error" id="passError"></p>

            <label>Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
            <p class="error" id="confirmError"></p>

            <label>Contact Number</label>
            <input type="text" id="contact" name="contact" required>
            <p class="error" id="contactError"></p>

            <label>Address</label>
            <textarea id="address" name="address" required></textarea>
            <p class="error" id="addressError"></p>

            <div class="captcha-box">
                Google reCAPTCHA Placeholder
            </div>

            <label>
                <input type="checkbox" id="terms" name="terms"> I agree to Terms & Conditions
            </label>
            <p class="error" id="termsError"></p>

            <button type="submit" class="btn">Sign Up</button>

            <div class="links">
                <a href="login.php">Already have an account?</a>
                <a href="login.php" class="btn">Login</a>
            </div>

        </form>
    </div>

    <div class="right-panel">
        <div class="overlay-text">
            <h2>Join Thousands of Learners</h2>
            <p>Start learning Python, Java, C++, Kotlin, Web Dev and more.</p>
        </div>
    </div>

</div>

<script src="../assets/js/signup.js"></script>
</body>
</html>
