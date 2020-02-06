var lgOutBtn = document.getElementById("logOut");
var allBtn = document.getElementById("allEmp");
var table = document.getElementById("adminTable");
var del = document.getElementById("deleteOne");

var COLUMN_TO_DISPLAY = 7;

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
    var colLength = COLUMN_TO_DISPLAY;

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
            resolve(xhr);
        };
        xhr.onerror = () => {
            reject('Something went wrong');
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

function  getInput(msg) {
    var identifier = prompt(msg);
    return (identifier);
}

const deleteEmployee = () => {
    allBtn.addEventListener("click", getAll);
    del.removeEventListener("click", deleteEmployee);
    var usn = getInput("Enter username you want to delete");
    if(usn != null){
        data = {
            JwT: localStorage.getItem("JwtTOKEN"),
            Username: usn
        };
    }
    sendHTTPReq("DELETE", "https://localhost:44305/api/Admin", data)
    .then((responseData) => {
        if(responseData.status == 200){
            alert("User Deleted");
            getAll();
            del.addEventListener("click", deleteEmployee);
        }
        else{
            alert("Some Error Occured "+responseData.status);
        }
    });
};

function clearTableData() {
    
}

const getAll = () => {
    //allBtn.removeEventListener("click", getAll);
    clearTableData();
    const reqBody = {
        "JwT": localStorage.getItem("JwtTOKEN")
    }
    sendHTTPReq('POST', "https://localhost:44305/api/Admin/getAllUsers", reqBody)
    .then((responseData) => {
        // console.log(responseData.response);
        json = responseData.response;
        console.log(json);
        if(json != null){
            drawTable(json);
        }
        else{
            localStorage.removeItem("JwtTOKEN");
            window.alert("Token is expired or Maybe is tampered! Please Login Again");
            window.location.href = "./index.html";
        }
    })
    .catch(err => {
        console.log(err);
    });
};

// drawTable(json);

allBtn.addEventListener('click', getAll);
lgOutBtn.addEventListener('click', lgout);
del.addEventListener('click', deleteEmployee);
