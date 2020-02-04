var empLogin = {
    email: "",
    passwrd: "",
};

function loginSubmit(){
    var email = document.getElementById("uname").value;
    var passwrd = document.getElementById("pwd").value;

    var empLogin = {
        email: email,
        passwrd: passwrd,
    };
    console.log(empLogin);
    api(empLogin);
    window.location.href = "./admin.html";
}

function api(empLogin){
    let empObject = empLogin;
    const xhr = new XMLHttpRequest();
    const url = "http://localhost:61496/api/Login";
    xhr.open('POST', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", "application/json");
    console.log(empObject);
    console.log(JSON.stringify(empObject));
    xhr.send(JSON.stringify(empObject));
}