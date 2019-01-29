https://codepen.io/seiry12345/pen/RqYKVJ
https://swiftmailer.symfony.com/docs/introduction.html

<?php

include_once '../../vendor/autoload.php';

const OWNER_EMAIL = '';
const DEVELOP_EMAIL = '';
const DEVELOP_IP = "";

if (isset($_POST)) {

  if ($_SERVER['REMOTE_ADDR'] == DEVELOP_IP) {
    $sendmailto = DEVELOP_EMAIL;
  } else {
    $sendmailto = OWNER_EMAIL;
  }

  $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
  $formDate = filter_input(INPUT_POST, 'date', FILTER_SANITIZE_STRING);
  $subject = 'Новая заявка с сайта' . $_SERVER['SERVER_NAME'];
  $msg = 'Телефон: ' . $phone . '<br>'
      . 'Удобное время: ' . $formDate;


// Create a message
  $message = (new Swift_Message($subject))
      ->setFrom(array('' => 'Почтовый робот'))
      ->setTo($sendmailto)
      ->setBody($msg, 'text/html');

  $message->setBcc(['', '']);

  $transport = (new Swift_SmtpTransport('smtp.yandex.ru', 587, 'tls'))
      ->setUsername('')
      ->setPassword('');

  $mailer = new Swift_Mailer($transport);

  $response = [];
  if ($mailer->send($message)) {
    $response['status'] = 'success';
    $response['title'] = 'Сообщение отправлено!';
    $response['message'] = 'Мы свяжемся с вами в ближайшее время!';
  } else {
    $response['status'] = 'error';
    $response['title'] = 'Ошибка при отправке сообщения';
    $response['message'] = 'Попробуйте отправить сообщение позже';
  }

  print json_encode($response);
}
