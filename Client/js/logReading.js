$(function(){

    //need a button to call the function
    $(/*button id*/).on("click", function(){
        logReading();
    });

});

function logReading(){
    //fields I need:
    let city = $("cityInput").val();
    let datetime = $(/*datetime element id*/).text();
    let temperature = $(/*temperature element id*/).text();
    let description = $(/*description element id*/).text();
    let icon = $(/*icon element id*/).attr('src');
    let mode = "log-reading";

    $.post(
    "http://localhost/WeatherWise/Server/logReadings.php", 
    "city="+city+"&time="+datetime+"&temperature="+temperature+"&description="+description+"&icon="+icon+"$mode="+mode, 
    function(result){
        console.log(result);
    }, 
    "JSON");

}