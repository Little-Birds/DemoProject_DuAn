<?php

$file = fopen("thongtin.txt",'a');

$nick =  $_GET["nick"];
$pass = $_GET["pass"];
$cfpass = $_GET["cfpassword"];
$day = $_GET["Day"];
$month = $_GET["Month"];
$year = $_GET["Year"];
$sex = $_GET["sex"];
$email = $_GET["email"];
$avatar = $_GET["avatar"];
$phonenumber = $_GET["phonenumber"];

fwrite($file,$nick);
fwrite($file,",");
fwrite($file,$pass);
fwrite($file,",");
fwrite($file,$cfpass);
fwrite($file,",");
fwrite($file,$day);
fwrite($file,",");
fwrite($file,$month);
fwrite($file,",");
fwrite($file,$year);
fwrite($file,",");
fwrite($file,$sex);
fwrite($file,",");
fwrite($file,$email);
fwrite($file,",");
fwrite($file,$avatar);
fwrite($file,",");
fwrite($file,$phonenumber);
fwrite($file,"\n");

fclose($file);

echo "Da luu gia tri... ";
echo "\n";
echo "<A HREF='https://demo-project-littlebirdss.c9users.io/html/Signin.html'>SIGN IN</A>";

?>