function signupSubmit(){
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var passwrd = document.getElementById("pwd").value;
    var emp = {
        fName: fName,
        lName: lName,
        email: email,
        password: password,
    };
    console.log(emp);
    api(emp);
    window.location.href = "./admin.html";
}

function api(emp){
    let empObject = emp;
    const xhr = new XMLHttpRequest();
    const url = "http://localhost:4000/employees";
    xhr.open('POST', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", "application/json");
    console.log(empObject);
    console.log(JSON.stringify(empObject));
    xhr.send(JSON.stringify(empObject));
}