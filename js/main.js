function validate()
{
    var name = document.getElementById('text').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var message = document.getElementById('error');
    message.style.backgroundColor='red';
    message.style.padding='15px';
    message.style.textAlign='center';
    message.style.color='white';
    message.style.borderRadius='5px';



    if(name=="" && email=="" && password=="" && confirm=="")
    {
        message.innerHTML="Please Enter Data <o_o>";
        return false;
    }
    else if(name>15||name<5)
    {
        message.innerHTML="Please Enter at least 5 letters and at more 15 letters";
        return false;
    }
    else if(email.indexOf("@")=="-1")
    {
        message.innerHTML='Please Enter Valid Email <-_->';
        return false;
    }
    else if(password.length()<8)
    {
        message.innerHTML='Please Enter at least 8 charcters';
        return false;
    }
    else if(password != confirm)
    {
        message.innerHTML='Please Matched password';
        return false;
    }
    else
    {
        return true;
    }
    

}