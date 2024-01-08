<?php
// Если форма отправлена, обрабатываем данные
if (isset($_POST['email'])) {
  // Проверяем, являются ли поля валидными
  $email = trim($_POST['email']);

  if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    echo 'Please enter right email !';
    die;
  } else {
    /**
     * text file
     *
    // Открываем файл для записи
    $file = fopen('data-email.txt', 'a');

    // Записываем данные в файл
    fwrite($file, date('Y-m-d H:i:s').' '.$_POST['email']."\n\n");

    // Закрываем файл
    fclose($file);
    */
    
    /**
     * excel fale
     */
    // формируем строку с данными
    $csv_data = array('date' => date('Y-m-d H:i:s'), 'email' => $email);
    // Открываем файл для записи
    $file_handle = fopen('email.csv', 'a');
    // Записываем данные в файл
    foreach ($csv_data as $key => $value) {
        fputcsv($file_handle, array($value));
    }
    // Закрываем файл
    fclose($file_handle);

    echo 'Sucsess!';
  }
} else{
  die;
}