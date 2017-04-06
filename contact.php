<?php

$name = $_POST['name'];
$email =$_POST['email'];
$message=$_POST['msg'];

mail("kshitijakarkar@gmail.com","Message from Website",$message,"From : $email\r\n ");

echo "Thank you for contacting. I will get back to you soon ...";



 ?>
