<?php
session_start();
$error = [];
if(isset($_SESSION['signup_error'])){
    $error = $_SESSION['signup_error'];
    unset($_SESSION['signup_error']);
}

$role = $_GET['role'] ?? 'student';
$_SESSION['signup_role'] = $role;

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

        <form class="signup-form" id="signupForm" method="post" action="../controller/signupCheck.php">

            <label for="name">Full Name</label>
             <input type="text" id="name" name="name" value="" />
                <?php if (isset($errors['name'])): ?>
                    <p class="error-message"><?php echo $errors['name']; ?></p>
                <?php endif; ?>

            
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value=""/>
                <?php if (isset($errors['email'])): ?>
                    <p class="error-message"><?php echo $errors['email']; ?></p>
                <?php endif; ?>


            <label for="username">Username</label>
            <input type="text" id="username" name="username" value="" />
                <?php if (isset($errors['username'])): ?>
                    <p class="error-message"><?php echo $errors['username']; ?></p>
                <?php endif; ?>


            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value=""  />
                <?php if (isset($errors['dob'])): ?>
                    <p class="error-message"><?php echo $errors['dob']; ?></p>
                <?php endif; ?>


            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
                <?php if (isset($errors['password'])): ?>
                    <p class="error-message"><?php echo $errors['password']; ?></p>
                <?php endif; ?>



            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
                <?php if (isset($errors['confirmPassword'])): ?>
                    <p class="error-message"><?php echo $errors['confirmPassword']; ?></p>
                <?php endif; ?>

            
            <input type="hidden" name="role" value="<?php echo htmlspecialchars($_SESSION['signup_role']); ?>">
            <?php if (isset($errors['general'])): ?>
                <p class="error-message"><?php echo $errors['general']; ?></p>
            <?php endif; ?>

            
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
