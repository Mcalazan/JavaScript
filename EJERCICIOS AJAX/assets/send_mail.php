<?php

if(isset($_POST)){
    $name = $_POST("name");
    $email = $_POST("email");
    $subject = $_POST("subject");
    $comments = $_POST("comments");
    
    $domian = $_SERVER("HTTP_HOST");
    $to = "calazan99@gmail.com";
    $subject = "Contacto gran Calazan de $domian : $subject";
    $message = "<p>Datos enviados desde el sitio <b>$domain</b></p>
    <ul>
        <li>Nombre: <b>$name</b><li>
        <li>Email: <b>$email</b><li>
        <li>Asunto: $subject<li>
        <li>Comentarios: $subject<li>
    </ul>
    ";
 
    $headers = "MIME-Version:1.0\r\n"."Content-Type:text/html; charset=utf-8\r\n"."From: Envio Automatico No Responder <no-reply@$domian>";


    $send_mail = mail($to,$subject, $message, $headers);

    if($send_mail){
        $res = [
            "err" => false,
            "message" => "Tus datos han sido enviados"
        ];
    }else{
        $res=[
            "err" => true,
            "message" => "Error al enviar tus datos. Intente de nuevo"
        ];
    }

    header('Content-type: application/json');
    echo json_encode($res);
    exit;
}