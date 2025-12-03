<?php
$host = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'codecraftdb';

function getConnection() {
    global $dbname, $host, $dbuser, $dbpass;
    $conn = new mysqli_connect($GLOBALS['host'], $dbuser, $dbpass, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

?>