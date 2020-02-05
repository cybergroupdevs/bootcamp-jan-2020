var lgOutBtn = document.getElementById("logOut");
var allBtn = document.getElementById("allEmp");
var table = document.getElementById("adminTable");

var json = [
    {
        "empName": "Abha",
        "username": "abha.rana@cygrp.com",
        "empPhone": "8765432345",
        "empAddress": "Somewhere near Karakarduma, Delhi-110043",
        "empRole": "EMPLOYEE",
        "empPassword": null,
        "empProjectId": "Bench",
        "adminFlag": 0,
        "empFlag": 0
    },
    {
        "empName": "Deepak",
        "username": "deepak.yadav@cygrp.com",
        "empPhone": "9991112345",
        "empAddress": "B-123, Govindpuri, Okhla Vihar, Delhi-110321",
        "empRole": "EMPLOYEE",
        "empPassword": null,
        "empProjectId": "Bench",
        "adminFlag": 0,
        "empFlag": 0
    }];

const giveInputElement = (edit, data) => {
    var temp = document.createElement("input");
    temp.type = 'text';
    temp.value = data;
    temp.readOnly = false;
    temp.style.width = "100%";
    temp.style.border = "none";
    if(edit == true){
        temp.readOnly = true;
    }
    return temp;
}

function  drawTable(json) {
    var colLength = 7;
    //var aws = ["___Shubham","--dcsdac","--dasad","__asdcasdc","__ascasdc","__ascsac","--asasd"];

    for(let j=0; j<json.length; j++){
        var x = json[j];
        var data = [j+1, x.empName, x.username, x.empPhone, x.empRole, x.empAddress, x.empProjectId];
        var row = table.insertRow(j);        
        for(let i=0; i<colLength; i++){
            var cell = row.insertCell(i);
            cell.innerHTML = data[i];
        }
    }
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
    //document.getElementById("empRole").style.display = "none";
    if (typeof(Storage) !== "undefined") {
        const token = localStorage.getItem("JwtTOKEN");
        if(token != null){
            var jsonPayload = jsonDecoder(token);
            console.log(jsonPayload)
            document.getElementById("userName").innerHTML = jsonPayload.EmpName;
            getAll();
        }
        else{
            console.log("There is no JwtToken present");
            window.location.href = "./index.html";
        }
    } 
    else {
        alert("Sorry ! Your browser is not cool.");
    }
}

const lgout = () => {
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem("JwtTOKEN");
        console.log("something is not working");
        window.location.href = "./index.html";
    } else {
        // Sorry! No Web Storage support..
        alert("Sorry ! Your browser is not cool.");
    }
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


const getAll = () => {
    sendHTTPReq('GET', "https://localhost:44305/api/Admin")
    .then((responseData) => {
        // console.log(responseData.response);
        json = responseData.response;
        drawTable(json);
    })
    .catch(err => {
        console.log(err);
    });
};

// drawTable(json);

allBtn.addEventListener('click', getAll);
lgOutBtn.addEventListener('click', lgout);