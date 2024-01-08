<?php
// Если форма отправлена, обрабатываем данные
if (isset($_POST['email'])) {
  // Проверяем, являются ли поля валидными
  if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false) {
    echo 'Please enter right email !';
    die;
  } else {
    // Открываем файл для записи
    $file = fopen('data-email.txt', 'a');

    // Записываем данные в файл
    fwrite($file, date('Y-m-d H:i:s').' '.$_POST['email']."\n\n");

    // Закрываем файл
    fclose($file);

    echo 'Sucsess!';
  }
} else{
  die;
}