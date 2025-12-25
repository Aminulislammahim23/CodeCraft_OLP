<?php
    session_start();
    if(!isset($_SESSION['status']) && !isset($_COOKIE['status'])){
        header('location: ../view/login.php?error=badrequest');
    }

    require_once('../model/userModel.php');

    // Authentication check
    if(!isset($_COOKIE['status']) || !isset($_SESSION['user_id'])){
    header('location: ../view/login.php?error=badrequest');
    exit();
    }

    $id = $_SESSION['user_id'];
    $user = getUserById($id);

    if(!$user){
    die("User not found!");
}

    $avatarPath = !empty($user['avatar']) ? $user['avatar'] : "assets/upload/default/default.jpg";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCraft – Student Profile</title>
    <link rel="stylesheet" href="../assets/css/profile.css">
</head>
<body>

<div class="profile-container">

    <header class="topbar">
        <h2>My Profile</h2>
        <a class="back" href="student.php">← Back to Dashboard</a>
    </header>

    <section class="profile-box">
        <div class="profile-left">

                    <img id="avatarImg" src="../<?= htmlspecialchars($avatarPath) ?>" class="avatar">
                    <input type="file" id="avatarUpload" accept="image/*" hidden>
                    <button class="edit-btn" id="editAvatarBtn">Change Avatar</button>

                <h2 id="studentName">Mahim</h2>
                    <p class="role">Student at CodeCraft</p>

                <button class="edit-btn" id="editBtn">Edit Profile</button>
        </div>


        <div class="profile-right">

            <h3>Personal Information</h3>

            <div class="info-grid">
                <div class="info-item">
                    <label>Full Name</label>
                    <p id="joined"><?= htmlspecialchars($user['name']) ?></p>
                </div>

                <div class="info-item">
                    <label>Username</label>
                    <p id="fullName">  <?= htmlspecialchars($_SESSION['username']) ?> </p>
                </div>

                <div class="info-item">
                    <label>Email</label>
                    <p id="email"><?= htmlspecialchars($user['email']) ?></p>
                </div>

                <div class="info-item">
                    <label>Date of Birth</label>
                    <p id="phone"><?= htmlspecialchars($user['dob']) ?></p>
                </div>

                
            </div>

            <h3>Account Settings</h3>

            <div class="info-grid">
                <div class="info-item">
                    <label>Password</label>
                    <p id="password"><?= htmlspecialchars($user['password']) ?></p>
                </div>
                <div class="info-item">
                    <button class="change-btn" id="changePasswordBtn">Change Password</button>
                </div>
            </div>

        </div>

    </section>

</div>

<script src="../assets/js/profile.js"></script>
</body>
</html>
