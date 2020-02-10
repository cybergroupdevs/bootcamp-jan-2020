document.getElementById("btn").addEventListener("click",Postdata)
function Postdata(){
    var Sno=parseInt(document.getElementById("inputid").value);
    var Username=document.getElementById("inputName").value;
    var Email=document.getElementById("inputEmail").value;
    var Password=document.getElementById("inputPassword").value;
    
    
    var json={
        "Sno":Sno,
        "Name":Username,
        "Email":Email,
        "Password":Password
    };
    console.log(json);
    //sendHTTPReq('POST', "http://localhost:51391/api/Panel", json).then(x => func() );
    var xhr= new XMLHttpRequest();
     var url="http://localhost:51391/api/Panel";
     xhr.open('POST', url,true);
     xhr.responseType='json';
     xhr.setRequestHeader('Content-type','application/json');
     console.log(JSON.stringify(json));
      xhr.onload = () => {
         console.log(xhr.status);
         //var jwtToken = xhr.response.token;

   };
    xhr.send(JSON.stringify(json));
}


