var login=document.getElementById("loginBtn");
var regLink=document.getElementById("toReg");

const getLoginData = () => {
    var mail = document.getElementById("email").value;
    var pwd = document.getElementById("pass").value;
    console.log(pwd);
    var usrInfo = {
        "Email": mail,
        "Pass": pwd
    };
    logMeIn(usrInfo);
}


const logMeIn = (lgndata) => {
    sendHTTPReq('POST', "http://localhost:51543/api/Login", lgndata)
    .then(responseData => {
        if(responseData.status == 200){
            saveInLocalStorage(responseData.response.token);
            var x = jsonDecoder(responseData.response.token);
            if(x.Jobrole == "ADMIN")
                window.location.href = "../html/userList.html";
            else if(x.Jobrole == "EMPLOYEE")
                window.location.href = "#";
            else 
                window.location.href = "#";
        }
        else if(responseData.status == 401){
            window.alert("Unauthorized");
        }
        else{
            window.alert(responseData.status);
            // window.location.href = "./error.html";
            // document.getElementById("errorMessage").value = " "+xhr.status;
        }
        console.log(responseData.status);
    })
    .catch(err => {
        console.log(err);
    })
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
            if(jsonPayload.Jobrole == "ADMIN")
                window.location.href = "../html/userList.html";
            else if(jsonPayload.Jobrole == "User")
                window.location.href = "#";
            else
                window.location.href = "#";
        }
        else{
            console.log("JwtToken not present");
        }
    } else {
        
        alert("Unsupportive browser");
    }
}

const sendHTTPReq = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        console.log(typeof(JSON.stringify(data)));
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
        };
        console.log(data);
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

function saveInLocalStorage(ResToken){
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem("JwtTOKEN", ResToken);
        console.log("Token successfully stored");
    } else {
        
        alert("Not supporting.");
    }
}


login.addEventListener('click', getLoginData);
//regLink.addEventListener('click', s);