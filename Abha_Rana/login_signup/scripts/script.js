document.getElementById("btn").addEventListener("click",Postdata);
function Postdata()
{   
    var Username=document.getElementById("uname").value;
     var Password=document.getElementById("pass").value; 
     var Name=document.getElementById("name").value;
     var Email=document.getElementById("email").value;
     var Phone=document.getElementById("num").value;
     var Address=document.getElementById("add").value;
     var userdata={
        "Username":Username,
        "Password":Password,
        "Name":Name,
        "Email":Email,
        "Phone":Phone,
        "Address":Address
        };
        
        console.log(userdata);
        var xhr = new XMLHttpRequest();
        var url="https://localhost:44352/api/signup";
        xhr.open("POST", url,true);
        xhr.responseType='json';
        xhr.setRequestHeader('Content-type', 'application/json');
        console.log(JSON.stringify(userdata));
        xhr.send(JSON.stringify(userdata));
        
    }