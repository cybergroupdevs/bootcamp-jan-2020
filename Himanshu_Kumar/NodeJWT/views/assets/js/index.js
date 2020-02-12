//var formdata=[{Name:"Himanshu Kumar", Email:"acb@xyz.com",Gender:"Male",Age:10,Designation:"Admin",Password:"rdfgfdcg"}]
var signup=document.getElementById("signUpBtn");
var logLink=document.getElementById("toLogin");


const getUserData = () => {
    var name = document.getElementById("nameId").value;
    var mail = document.getElementById("mailId").value;
    var pwd = document.getElementById("passId").value;
    var age = document.getElementById("ageId").value;
    
    console.log(pwd);

    var userData = {
        "Namee": name,
        "Gender":"male",
        "Age":age,
        "Email":mail,
        "Pass": pwd,
        "Jobrole":"User"
        
        
    };
    // console.log(JSON.stringify(json));
    sendData(userData);
}

const sendData = (userInfo) => {

    sendHTTPReq('POST', "http://localhost:51543/api/Signup", userInfo)
    .then(responseData => {
        console.log(responseData);
        if(responseData == 200){
            document.getElementById("sgnUp").style.display = "none";
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


function saveInLocalStorage(ResToken){
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem("JwtTOKEN", ResToken);
        console.log("Token successfully stored");
    } else {
        
        alert("Not supporting.");
    }
}

signup.addEventListener('click', getUserData);














// function register(){
//     var formadata2=readfromData();
//     formdata.push(formdata2);
//     generateHttpPost(formdata);
//     login();
//     window.location.href="login.html";
// }

// function readfromData(){
//     var formdata_new={};
//     formdata_new["Name"]=document.getElementById("name-id").value;
//     formdata_new["Email"]=document.getElementById("email-id").value;
//     formdata_new["Age"]=document.getElementById("age-id").value;
//     formdata_new["Password"]=document.getElementById("pass-id").value;
// }

// function register() {
//     var input = document.getElementById("userInput").value;
//     alert(input);
// }