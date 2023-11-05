$(function(){
    showCart();
});
function showCart()
{
    //console.log("JS");
    $.getJSON("../../Server/history.php", "mode=show-history", function(result){
        $("#history-table-body").empty();
        console.log(result);
        if(result.readings.length > 0)
        {
            $.each(result.readings, function(){
                console.log(this.id);
                $("#history-table-body").append(
                    "<tr><td>"+this.id+"</td><td>"+this.city+"</td><td>"+convertSQLDateOutput(this.date)+"</td><td>"+this.temperature+" &#8451;</td><td>"+this.description+"</td><td><img src='"+this.icon+"' width='50px'></td><td>"+this.windspeed+"km/h</td><td>"+this.humidity+"%</td><td><button type='button' id='"+this.id+"-delete-reading-button' class='delete-reading-button' data-reading-id='"+this.id+"'>Delete</button></td></tr>"
                );
            });
            $("#cart-table-body").append("<tr></tr>");
        }
    });
}
function convertSQLDateOutput(date){
    return date.split("-").reverse().join("/");
}