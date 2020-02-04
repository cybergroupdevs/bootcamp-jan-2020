function func(){

window.location="../admin/index.html"
}

document.getElementById("btn").addEventListener("click",Postdata)
function Postdata(){
    var Sno=document.getElementById("inputid").value;
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
    var xhr= new XMLHttpRequest();
    var url="https://localhost:44315/api/Panel";
    xhr.open("POST", url,true);
    xhr.responseType='json';
    xhr.setRequestHeader('Content-type','application/json');
    console.log(JSON.stringify(json));
    xhr.send(JSON.stringify(json));

    xhr.onload = () => {
        console.log(xhr.status);
    };
}

