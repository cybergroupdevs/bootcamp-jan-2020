var signup = document.getElementById("signUpButton");
var login = document.getElementById("loginButton");

//regLink is in LOGIN Page
var registerLink = document.getElementById("toRegistration");
//logLink is in SIGNUP PAGE
var logLink = document.getElementById("toLogin");

//Getting data from SIGNUP form and storing it in a JSON format
const getDataFromSignupForm = () => {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let usn = document.getElementById("username").value;
    let psswd = document.getElementById("password").value;
    console.log(psswd);
    let userData = {
        "EmpName": name,
        "Username": username,
        "EmpPhone": phone,
        "EmpAddress": address,
        "EmpRole": "EMPLOYEE",
        "EmpPassword": password,
        "EmpProjectId": "Bench",
        "AdminFlag": 0,
        "EmpFlag": 0
    };
    // console.log(JSON.stringify(json));
    sendData(userData);
}

//Getting data from LOGIN form and storing it in a JSON format
const getDataFromLoginForm = () => {
    let username = document.getElementById("email").value;
    let password = document.getElementById("loginPassword").value;
    let userInfo = {
        "Username": username,
        "EmpPassword": password
    };
    logMeIn(userInfo);
}

//Sending HTTP REQUESTS, other methods can call me and pass me the required information and I'll do the rest
const sendHTTPRequest = (method, url, payload) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        if(payload){
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = () => {
            resolve(xhr);
        };
        xhr.onerror = () => {
            reject('Something went wrong');
        }
        xhr.send(JSON.stringify(payload));
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
const logMeIn = (loginData) => {
    sendHTTPRequest('POST', "https://localhost:44305/api/Login", loginData)
    .then(responseData => {
        if(responseData.status == 200){
            saveInLocalStorage(responseData.response.token);
            var claimsData = jsonDecoder(responseData.response.token);
            if(claimsData.EmpRole == "ADMIN")
                window.location.href = "./admin-page.html";
            else if(claimsData.EmpRole == "EMPLOYEE")
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
    sendHTTPReuest('POST', "http://localhost:8080/saveEmployee", userdata)
    .then(responseData => {
        if(responseData.status == 200){
            document.getElementById("signupForm").style.display = "none";
            document.getElementById("loginForm").style.display = "flex";
        }
        else{
            window.alert(responseData.status);
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
            let jsonPayload = jsonDecoder(token);
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
signup.addEventListener('click', getDataFromSignupForm);
login.addEventListener('click', getDataFromLoginForm);

// For Links
var toLoginPage = () => {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "flex";
}
//For Links
var toSignupPage = () => {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "flex";
}

logLink.addEventListener('click', toLoginPage);
registerLink.addEventListener('click', toSignupPage);
