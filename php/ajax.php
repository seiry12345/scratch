https://codepen.io/seiry12345/pen/RqYKVJ

if (!empty($_POST)) {
    $email = trim($_POST['email']);
    $name = htmlspecialchars($_POST['name']);
    $text = htmlspecialchars($_POST['text']);
    $phone = htmlspecialchars($_POST["phone"]);

    $to = 'test@mail.ru';
    $subject = 'Новая заявка с сайта' . $_SERVER['SERVER_NAME'];
    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Имя: ' . $name . '</p>
						<p>Телефон: ' . $phone . '</p>
						<p>Почта: ' . $email . '</p>
                        <p>Сообщение: ' . $text . '</p>
                    </body>
                </html>';
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s')."\r\n";
    $headers .= "From: Отправитель <from@example.com>\r\n";
    mail($to, $subject, $message, $headers, $headerss);
}
?>
