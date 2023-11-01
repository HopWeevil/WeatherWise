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
                    "<tr><td>"+this.id+"</td><td>"+this.city+"</td><td>"+this.date+"</td><td>"+this.temperature+"</td><td>"+this.description+"</td><td><img src='"+this.icon+"' width='100px'></td><td>"+this.windspeed+"km/h</td><td>"+this.humidity+"%</td></tr>"
                );
            });
            $("#cart-table-body").append("<tr></tr>");
        }
    });
}