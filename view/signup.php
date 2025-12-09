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
        <div>
            <span class="brand-name">CodeCraft</span>
        </div>
        
        <h1>Create Your Account</h1>
        <p class="subtitle">Start learning and track your coding journey.</p>

        <form class="signup-form" id="signupForm" method="post" action="signup_process.php">

            <label for="fname">Full Name</label>
            <input type="text" id="fname" name="fname" required>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>

            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>

            <button type="submit" class="btn">Sign Up</button>

            <div class="links">
                <a href="login.html">Already have an account?</a>
                <a href="login.html" class="btn">Login</a>
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
