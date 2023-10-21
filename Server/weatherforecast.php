<?php
require('configuration.php');

if ($_SERVER["REQUEST_METHOD"] === "GET") {

    header('Access-Control-Allow-Origin: http://127.0.0.1:5500');

    $cityName = $_GET['cityName'];
    if (!$cityName) {
        echo json_encode(['error' => 'Please enter a city name.']);
        exit;
    }

    $apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q={$cityName}&appid={$apiKey}&units=metric&lang=uk";

    $response = file_get_contents($apiUrl);
    echo $response;
}
