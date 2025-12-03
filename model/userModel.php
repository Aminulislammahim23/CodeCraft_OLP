<?php
    require_once 'db.php';

    function login($user){
        $conn = getConnection();
        $username = $user['username'];
        $password = $user['password'];
        $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            return true;
        } else {
            return false;
        }
        $conn->close();
    }
?>