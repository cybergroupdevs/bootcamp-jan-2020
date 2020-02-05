var lgOutBtn = document.getElementById("logOut");
var allBtn = document.getElementById("allEmp");
// var json = [
//     {
//         "Name": "hgfsd jhashjsd",
//         "Gender": "M",
//         "Age": 10,
//         "Email":null,
//         "JobRole": "Employee"
//     },
//     {
//         "Name": "hgfsd jhashjsd",
//         "Gender": "F",
//         "Age": 13,
//         "Email":null,
//         "JobRole": "Employee"
//     }
// ];
var table = document.getElementById("adminTable");

function drawTable(json) {
    for(let i=0; i<json.length; i++){
        let tr = document.createElement("tr");
        
        var x = json[i];
        
        var b = document.createTextNode(x.Name);
        var c = document.createTextNode(x.Gender);
        var d = document.createTextNode(x.Age);
        var e = document.createTextNode(x.Email);
        var f = document.createTextNode(x.JobRole);

        // f.appendChild(o1);
        // f.appendChild(o2);

        let nm = document.createElement("td");
        let gndr = document.createElement("td");
        let age = document.createElement("td");
        let mail = document.createElement("td");
        let role = document.createElement("td");

        nm.appendChild(b);
        gndr.appendChild(c);
        age.appendChild(d);
        mail.appendChild(e);
        role.appendChild(f);

        tr.appendChild(nm);
        tr.appendChild(gndr);
        tr.appendChild(age);
        tr.appendChild(mail);
        tr.appendChild(role);
        
        table.appendChild(tr);
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
    document.getElementById("listVal").style.display = "none";
    if (typeof(Storage) !== "undefined") {
        // localStorage is pre-defined here
        const token = localStorage.getItem("JwtTOKEN");
        
        if(token != null){
            var jsonPayload = jsonDecoder(token);
            document.getElementById("userName").innerHTML = jsonPayload.Username;
            getAll();
            drawTable();
        }
        else{
            console.log("No JwtToken present");
        }
    } else {
        
        alert("No browser support");
    }
}

const lgout = () => {
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem("JwtTOKEN");
        console.log("something's not working");
        window.location.href = "./index.html";
    } else {
        alert("No Web Storage support.");
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


const getAll = () => {
    sendHTTPReq('GET', "https://localhost:51543/api/values")
    .then((responseData) => {
        console.log(responseData.response);
    })
    .catch(err => {
        console.log(err);
    });
};

allBtn.addEventListener('click', getAll);
lgOutBtn.addEventListener('click', lgout);