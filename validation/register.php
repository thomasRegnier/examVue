<?php

header("Access-Control-Allow-Origin: *");
//
$mail = $_POST['mail'];
$password = $_POST['password'];

$response = new \stdClass();


if ($mail == '') {
    $response->msgEmail = "Le mail est manquant";
    http_response_code(400);

}

if ($password == ''){
    $response->msgPassword = "Le password est manquant";
    http_response_code(400);
}

if ($password != '' AND $mail != ''){
    http_response_code(200);

}

echo json_encode($response);
