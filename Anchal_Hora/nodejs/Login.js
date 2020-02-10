function login(){
    window.location.href = "./admin/index.html";
    }
document.getElementById("button").addEventListener("click",getToken)
function getToken(){

    var Sno=parseInt(document.getElementById("inputid").value);
    var Username=document.getElementById("inputName").value;
    var Email=document.getElementById("inputEmail").value;
    var Password=document.getElementById("inputPassword").value;
    
    
    var jformat= {
        "Sno":Sno,
        "Name":Username,
        "Email":Email,
        "Password":Password
    };
    console.log(jformat);
    //sendHTTPReq('POST', "http://localhost:3000/employees/login", json).then(x => func() );
    var xhr= new XMLHttpRequest();
     var url="http://localhost:3000/employees/login";
     xhr.open('POST', url,true);
     xhr.responseType='json';
     xhr.setRequestHeader('Content-type','application/json');
     console.log(JSON.stringify(jformat));
      xhr.onload = () => {
         console.log(xhr.status);
         //var jwtToken = xhr.response.token;

   };
    xhr.send(JSON.stringify(jformat));
}

