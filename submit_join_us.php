<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli("localhost", "root", "", "manasvi_tech");
if ($conn->connect_error) die("Connection failed");

$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$domain = $_POST['domain'];
$address = $_POST['address'];
$note = $_POST['note'];

$sql = "INSERT INTO join_us (full_name, email, contact_number, domain, address, note)
        VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $name, $email, $contact, $domain, $address, $note);

echo $stmt->execute() ? "success" : "error";

$stmt->close();
$conn->close();
?>
