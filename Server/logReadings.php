<?php 
    require "dbControl.php";

    if
    (
        !empty($_POST['user'])
        &&
        !empty($_POST['city'])
        &&
        !empty($_POST['time'])
        &&
        !empty($_POST['temperature'])
        &&
        !empty($_POST['description'])
        &&
        !empty($_POST['icon'])
        &&
        $_POST['mode'] == "log-reading"
    )
    {
        logReading($_POST['user'], $_POST['city'], $_POST['time'], $_POST['temperature'], $_POST['description'], $_POST['icon']);
    }

    function logReading($user, $city, $time, $temperature, $description, $icon)
    {
        $query = "
            insert into reading (user_id, city, time, temperature, description, icon)
            values (
                '{$user}',
                '{$city}',
                '{$time}',
                '{$temperature}',
                '{$description}',
                '{$icon}'
            )  
        ";
        $result = dbconnect($query);
        if(!$result)
        {
            fail("Log reading query fail");
        }
        success('Reading logged successfully');
        exit;
    }
?>