<?php

    
    $EmailOfLogin = $_GET["emaillogin"];
    $PassOfLogin = $_GET["passwordlogin"];
    
    echo $EmailOfLogin;
    echo $PassOfLogin;
    
    $username = array();
    $pass = array();
    $cfpass = array();
    $day = array();
    $month = array();
    $year = array();
    $sex = array();
    $email = array();
    $liv = array();
    $avt = array();
    $phone = array();
    

    $file = fopen("thongtin.txt",'r');
    while(!feof($file)){
        $user =  fgets($file);
        $tach = split("\,", $user);
        array_push($username,$tach[0]);
        array_push($pass,$tach[1]);
        array_push($cfpass,$tach[2]);
        array_push($day,$tach[3]);
        array_push($month,$tach[4]);
        array_push($year,$tach[5]);
        array_push($sex,$tach[6]);
        array_push($email,$tach[7]);
        array_push($liv,$tach[8]);
        array_push($avt,$tach[9]);
        array_push($phone,$tach[10]);
        
    
        
        
    }
    fclose($file);
    
    $arrLength = count($email);
    
    for($i = 0 ; i<$arrLength; $i++){
        echo $email[i];
    }
    
    for($i=0; $i < $arrLength; $i++){
        if(($email[i] == $EmailOfLogin) && ($pass[i] == $PassOfLogin)){
            echo "<script type = 'text/javascript'>";
            echo "window.location = 'html/Trangchu.html'";
            echo "</script>";
            break;
        }
        
    }

    
    
    
    
?>