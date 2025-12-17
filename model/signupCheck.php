<?php
session_start();
require_once('../model/userModel.php');

    $name = trim($_REQUEST['fname'] ?? '');
    $email = trim($_REQUEST['email'] ?? '');
    $password = $_REQUEST['password'] ?? '';
    $confirmPassword = $_REQUEST['confirmPassword'] ?? '';



?>