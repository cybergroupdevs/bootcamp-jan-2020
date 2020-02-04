// var empLogin = {
//     email: "",
//     passwrd: "",
// };

function loginSubmit(){
    var email = document.getElementById("uname").value;
    var passwrd = document.getElementById("pwd").value;

    var empLogin = {
        email: email,
        passwrd: passwrd,
    };
    console.log(empLogin);
    api(empLogin);
    //window.location.href = "./admin.html";
}

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

};

function api(empLogin){
    let empObject = empLogin;
    const xhr = new XMLHttpRequest();
    const url = "http://localhost:61496/api/Login";
    xhr.open('POST', url);
    //xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", "application/json");
    console.log(JSON.stringify(empObject));
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
    xhr.send(JSON.stringify(empObject));
    //debugger;
}

function printToken(jsonPayload){
    console.log(jsonPayload);
}
