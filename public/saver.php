<?php

    $data = file_get_contents("php://input");
    $response = json_decode($data, true);

    $fp = fopen('records.csv', 'a+');
    
    if (!filesize("records.csv")) {
      fputs($fp, $bom =( chr(0xEF) . chr(0xBB) . chr(0xBF) ));
      $result = fputcsv($fp, array_keys($response["data"]));
    }

    $result = fputcsv($fp, array_values($response["data"]));
    
    fclose($fp);
    chmod("records.csv", 0644);

    if ($result) {
      http_response_code(200);
      $json = array(
        "status" => true,
        "message" => "Успешно отправлено!"
      );
    } else {
      http_response_code(500);
      $json = array(
        "status" => false,
        "message" => "Проблема с отправкой!"
      );
    }
    
    echo json_encode($json);
?>