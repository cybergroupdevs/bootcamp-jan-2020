var lgOutBtn = document.getElementById("logOut");
var json = [
    {
        "Name": "Shubham Sharma",
        "Username": null,
        "Phone": "9823435456",
        "Address": "dmddmkdkamlkl kdkdm ksmd ksadsad smsd",
        "Role": "Employee",
        "Project": "P143"
    },
    {
        "Name": "Deepak Yadav",
        "Username": null,
        "Phone": "9823438586",
        "Address": "kdkdm ksmd ksadsad smsd",
        "Role": "Employee",
        "Project": "P987"
    }
];
var table = document.getElementById("adminTable");

function drawTable() {
    for(let i=0; i<json.length; i++){
        let tr = document.createElement("tr");
        
        var x = json[i];
        
        var a = document.createTextNode(i+1);
        var b = document.createTextNode(x.Name);
        var c = document.createTextNode(x.Username);
        var d = document.createTextNode(x.Phone);
        var e = document.createTextNode(x.Address);
        var f = document.getElementById("empRole");
        var g = document.createTextNode(x.Project);

        f.style.display = "flex";

        let indx = document.createElement("td");
        let nm = document.createElement("td");
        let usn = document.createElement("td");
        let ph = document.createElement("td");
        let adrs = document.createElement("td");
        let rl = document.createElement("td");
        let pr = document.createElement("td");

        indx.appendChild(a);
        nm.appendChild(b);
        usn.appendChild(c);
        ph.appendChild(d);
        adrs.appendChild(e);
        rl.appendChild(f);
        pr.appendChild(g);

        tr.appendChild(indx);
        tr.appendChild(nm);
        tr.appendChild(usn);
        tr.appendChild(ph);
        tr.appendChild(adrs);
        tr.appendChild(rl);
        tr.appendChild(pr);
        
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
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        const token = localStorage.getItem("JwtTOKEN");
        if(token != null){
            var jsonPayload = jsonDecoder(token);
            document.getElementById("userName").innerHTML = jsonPayload.Username;
        }
        else{
            console.log("There is no JwtToken present");
        }
    } else {
        // Sorry! No Web Storage support..
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

lgOutBtn.addEventListener('click', lgout);

drawTable();