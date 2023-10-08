<?php
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $cityName = $_GET['cityName'];
    if (!$cityName) {
        echo json_encode(['error' => 'Please enter a city name.']);
        exit;
    }

    $apiKey = 'key';
    $apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q={$cityName}&appid={$apiKey}&units=metric";

    $response = file_get_contents($apiUrl);
    echo $response;
}
?>