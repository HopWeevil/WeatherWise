$(function(){
    let statusLogin = 0;
    $("#login-form-email-phone").on("blur", function(){
        statusLogin = checkLogin($(this).val());
    });
    let statusPassword = false;
    $("#login-form-password").on("blur", function(){
        statusPassword = checkPassword($(this).val());
    });
    $("#login-form-send").on("click", function(){
        //alert(statusLogin + " " + statusPassword);
        loginAdmin(statusLogin, statusPassword);
    });
});

function checkLogin(login)
{
    let status = 0;
    if(login.match(/^\+38\d{10}$/) != null)//phone
    {
        status = 1;
        $("#login-admin-form-login-error").text("Login by phone");
    }
    else if(login.match(/^[a-zA-Z0-9\.]{4,17}@gmail.com$/) != null)//email
    {
        status = 2;
        $("#login-form-error").text("Login by email");
    }
    else
    {
        $("#login-form-error").text("Login is not a phone or password");
    }
    return status;
}
function checkPassword(password)
{
    let regex = /^[a-z0-9]{8,16}$/i;
    let status = false;
    if(password.match(regex) != null)
    {
        status = true;
    }
    else
    {
        status = false;
    }
    return status;
}