<?php
$to  = 'elisey1005@gmail.com';

// тема письма
$subject = 'Заявка с сайта';

$message = $_POST['name'] . '<br />' . $_POST['tel'];

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);