function login(){
    document.getElementById("btn").addEventListener("click",postData)
    function postData(){
    var Sno=parseInt(document.getElementById("inputid").value);
    var Username=document.getElementById("inputName").value;
    var Email=document.getElementById("inputEmail").value;
    var Password=document.getElementById("inputPassword").value;

console.log(empLogin);
api(empLogin);

window.location.href = "./admin/index.html";

};
    var empLogin = {
        "Sno":Sno,
        "Name":Username,
        "Email":Email,
        "Password":Password
    };

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        console.log(jsonPayload);
        printToken(jsonPayload);
        debugger;
        return JSON.parse(jsonPayload);
    
    }

    function api(empLogin){
    let json = empLogin;
    //sendHTTPReq('POST', "http://localhost:51391/api/Panel", json).then(x => func() );
    var xhr= new XMLHttpRequest();
     var url="http://localhost:51391/api/Login";
     xhr.open('POST', url,true);
     xhr.responseType='json';
     xhr.setRequestHeader('Content-type','application/json');
     console.log(JSON.stringify(json));
      xhr.onload = () => {
        console.log(xhr.response);
        let jwtToken = {} ;
        jwtToken = xhr.response; 
        parseJwt(jwtToken);
        debugger;
    };
    xhr.onerror = (err) =>{
        console.log(err);
    };
    xhr.send(JSON.stringify(json));
} 
    //debugger;

}
function printToken(jsonPayload){
    console.log(jsonPayload);
}