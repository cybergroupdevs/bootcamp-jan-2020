document.getElementById("btn").addEventListener("click",adminpostdata)
function adminpostdata(){
    
    var Username=document.getElementById("inputName").value;
    var Email=document.getElementById("inputEmail").value;
    var Password=document.getElementById("inputPassword").value;
    var ContactNo=document.getElementById("inputContact").value;
    
    var format={
        "Name":Username,
        "Email":Email,
        "Password":Password,
        "ContactNo":ContactNo
    };
    console.log(format);
    //sendHTTPReq('POST', "http://localhost:51391/api/Panel", json).then(x => func() );
    var xhr= new XMLHttpRequest();
     var url="http://localhost:51391/api/post";
     xhr.open('POST', url,true);
     xhr.responseType='json';
     xhr.setRequestHeader('Content-type','application/json');
     console.log(JSON.stringify(format));
      xhr.onload = () => {
         console.log(xhr.status);
         //var jwtToken = xhr.response.token;

   };
    xhr.send(JSON.stringify(format));
}