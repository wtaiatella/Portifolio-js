<?php

require './sendgrid-php/sendgrid-php.php';
require 'keys.php';

$email_site = 'wtaiatella@gmail.com';
$nome_site = "Wagner Taiatella's Resume";

$email_user = $_POST['email'];
$nome_user = $_POST['name'];

$body_content = '';

foreach ($_POST as $field => $value) {
    if (
        $field !== 'leaveblank' &&
        $field !== 'dontchange' &&
        $field !== 'send'
    ) {
        $sanitize_value = filter_var($value, FILTER_SANITIZE_STRING);
        $body_content .= "$field: $value \n";
    }
}

$email = new \SendGrid\Mail\Mail();
$email->setFrom($email_site, $nome_site);
$email->addTo($email_site, $nome_site);

$email->setReplyTo($email_user, $nome_user);

$email->setSubject('Formulário Bikcraft');
$email->addContent('text/plain', $body_content);

$sendgrid = new \SendGrid($sendgrid_api);
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ' . $e->getMessage() . "\n";
}
