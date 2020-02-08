var sign = document.getElementById("signUpBtn");
var login = document.getElementById("loginButton");

//regLinki is in LOGIN Page
var regLink = document.getElementById("toRegistration");
//logLink is in SIGNUP PAGE
var logLink = document.getElementById("toLogin");

//Getting data from SIGNUP form and storing it in a JSON format
const getDataFromForm = () => {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phn").value;
    var address = document.getElementById("addrs").value;
    var usn = document.getElementById("usn").value;
    var psswd = document.getElementById("pswd").value;
    console.log(psswd);
    var userData = {
        "EmpName": name,
        "Username": usn,
        "EmpPhone": phone,
        "EmpAddress": address,
        "EmpRole": "EMPLOYEE",
        "EmpPassword": psswd,
        "EmpProjectId": "Bench",
        "AdminFlag": 0,
        "EmpFlag": 0
    };
    // console.log(JSON.stringify(json));
    sendData(userData);
}

//Getting data from LOGIN form and storing it in a JSON format
const getDataFromLoginForm = () => {
    var usn = document.getElementById("email").value;
    var paswd = document.getElementById("lgnpswd").value;
    console.log(paswd);
    var usrInfo = {
        "Username": usn,
        "EmpPassword": paswd
    };
    logMeIn(usrInfo);
}

//Sending HTTP REQUESTS, other methods can call me and pass me the required information and I'll do the rest
const sendHTTPReq = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        console.log(JSON.stringify(data));
        xhr.responseType = 'json';
        if(data){
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = () => {
            //resolve(xhr.status + "--Token--"+xhr.response.token);
            resolve(xhr);
        };
        xhr.onerror = () => {
            reject('Something went wrong');
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

//Storing the token in local storage
function saveInLocalStorage(ResToken){
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem("JwtTOKEN", ResToken);
        console.log("Token is stored successfully");
    } else {
        // Sorry! No Web Storage support..
        alert("Sorry ! Your browser is not cool.");
    }
}

//Also for POST request, called from login page only
const logMeIn = (lgndata) => {
    sendHTTPReq('POST', "https://localhost:44305/api/Login", lgndata)
    .then(responseData => {
        if(responseData.status == 200){
            saveInLocalStorage(responseData.response.token);
            var x = jsonDecoder(responseData.response.token);
            if(x.EmpRole == "ADMIN")
                window.location.href = "./admin-page.html";
            else if(x.EmpRole == "EMPLOYEE")
                window.location.href = "#";
            else 
                window.location.href = "#";
        }
        else if(responseData.status == 401){
            window.alert("Unauthorized");
        }
        else{
            window.alert(responseData.status);
        }
    })
} 

//For Post request, called from signup page only
const sendData = (userdata) => {

    sendHTTPReq('POST', "https://localhost:44305/api/Signup", userdata)
    .then(responseData => {
        console.log(responseData);
        if(responseData == 200){
            document.getElementById("sgnup1").style.display = "none";
            document.getElementById("lgn").style.display = "flex";
        }
        else{
            window.alert(responseData);
        }
    })
    .catch(err => {
        console.log(err);
    });
}



const jsonDecoder = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
};

window.onload = () => {
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        const token = localStorage.getItem("JwtTOKEN");
        if(token != null){
            var jsonPayload = jsonDecoder(token);
            if(jsonPayload.EmpRole == "ADMIN")
                window.location.href = "./admin-page.html";
            else if(jsonPayload.EmpRole == "EMPLOYEE")
                window.location.href = "";
            else
                window.location.href = "";
        }
        else{
            console.log("There is no JwtToken present");
        }
    } else {
        // Sorry! No Web Storage support..
        alert("Sorry ! Your browser is not cool.");
    }
}

//Attaching listeners to LOGIN Button and SIGNUP Button
sign.addEventListener('click', getDataFromForm);
login.addEventListener('click', getDataFromLoginForm);

// For Links
var l = () => {
    document.getElementById("sgnup1").style.display = "none";
    document.getElementById("lgn").style.display = "flex";
}
//For Links
var s = () => {
    document.getElementById("lgn").style.display = "none";
    document.getElementById("sgnup1").style.display = "flex";
}

logLink.addEventListener('click', l);
regLink.addEventListener('click', s);
