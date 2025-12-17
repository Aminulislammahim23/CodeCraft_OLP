<?php
session_start();
require_once('../model/userModel.php');

    $name = trim($_REQUEST['name'] ?? '');
    $email = trim($_REQUEST['email'] ?? '');
    $username = trim($_REQUEST['username'] ?? '');
    $password = $_REQUEST['password'] ?? '';
    $confirmPassword = $_REQUEST['confirmPassword'] ?? '';
    $dob      = $_REQUEST['dob'] ?? '';
    $role     = $_REQUEST['role'] ?? 'student';

    if($username == "" || $password == ""){
        echo "please type username/password first!";
    }else{
         $user = [
        'name'     => $name,
        'username' => $username,
        'email'    => $email,
        'password' => $password,
        'dob'      => $dob,
        'role'     => $role
    ];
        $status = addUser($user);
        if($status){
           header('location: ../view/login.php?success=1');
        }else{
            header('location: ../view/signup.php?error=regerror');
        }
    }
?>