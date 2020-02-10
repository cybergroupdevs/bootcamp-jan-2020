function func(){
    window.location.href = "./admin/index.html";
    }
document.getElementById("button").addEventListener("click",Gettoken)
function Gettoken(){

    var Sno=parseInt(document.getElementById("inputid").value);
    var Username=document.getElementById("inputName").value;
    var Email=document.getElementById("inputEmail").value;
    var Password=document.getElementById("inputPassword").value;
    
    
    var get = {
        "Sno":Sno,
        "Name":Username,
        "Email":Email,
        "Password":Password
    };
    console.log(get);
    //sendHTTPReq('POST', "http://localhost:51391/api/Panel", json).then(x => func() );
    var xhr= new XMLHttpRequest();
     var url="http://localhost:51391/api/Login";
     xhr.open('POST', url,true);
     xhr.responseType='json';
     xhr.setRequestHeader('Content-type','application/json');
     console.log(JSON.stringify(get));
      xhr.onload = () => {
         console.log(xhr.status);
         //var jwtToken = xhr.response.token;

   };
    xhr.send(JSON.stringify(get));
}

