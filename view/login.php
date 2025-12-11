<?php
if(isset($_GET['error'])){
    $error = $_GET['error'];
    if($error == "invalid_user"){
        $err1 = "please type valid username/password!";
        echo $err1;
    }elseif($error == 'badrequest'){
        $err2 = "please login first";
        echo $err2;
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCraft – Login</title>
    <link rel="stylesheet" href="../assets/css/login.css">
</head>
<body>

<div class="login-container">

    <div class="left-panel">
        <div class="brand">
            <img src="../assets/img/logo.png" alt="CodeCraft Logo" class="brand-logo">
        </div>

        <h1 id="demo" >Welcome Back</h1>
        <p class="subtitle">Login to continue learning and tracking your progress.</p>

        <form class="login-form" action="../controller/loginCheck.php" method="POST">

            <label>Email</label>
            <input type="email" id="email" class="email" name="email">

            <label>Password</label>
            <input type="password" id="password" class="password" name="password">

            <input type="submit" class="btn" id="loginBtn" name="submit" value="Login"/><br><br>

            <div class="links">
                <a href="forget_password.html">Forgot Password?</a>
                <a href="signup.php">Create Account</a>
            </div>

        </form>
    </div>

    <div class="right-panel">
        <div class="overlay-text">
            <h2>Start Your Coding Journey</h2>
            <p>Learn Python, Java, C++, Web Development and more.</p>
        </div>
    </div>

</div>

<!-- <script src="../assets/js/loginVal.js"></script> -->

</body>
</html>
