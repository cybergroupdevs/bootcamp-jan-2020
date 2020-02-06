let accesstoken=localStorage.getItem("JWTtoken");
let data = DecodeToken(accesstoken);
let obj = {
  Role: data.Role,
  Username: data.Username
};
$( document ).ready(function() {
    var xhr = new XMLHttpRequest();
    var url="https://localhost:44352/api/data/1";
    xhr.open("GET", url,true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
    xhr.onload = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var userdata=JSON.parse(xhr.response);
        console.log(userdata);
        
  }
    }
    var table = document.getElementById("userdata");
       for(let i=0; i<userdata.length; i++){
       let tr = document.createElement("tr");
        
       var x = userdata;
       console.log(x);
        
    
        var b = document.createTextNode(x.name);
        var c = document.createTextNode(x.username);
        var d = document.createTextNode(x.phone);
        var e = document.createTextNode(x.role);
        var f = document.createTextNode(x.email);
        var g = document.createTextNode(x.address);
        var h = document.createTextNode(x.project);

        let nm = document.createElement("td");
        let usn = document.createElement("td");
        let ph = document.createElement("td");
        let rl = document.createElement("td");
        let em = document.createElement("td");
        let ad = document.createElement("td");
        let pr=  document.createElement("td");

        
        nm.appendChild(b);
        usn.appendChild(c);
        ph.appendChild(d);
        rl.appendChild(e);
        em.appendChild(f);
        ad.appendChild(g);
        pr.appendChild(h);

        
        tr.appendChild(nm);
        tr.appendChild(usn);
        tr.appendChild(ph);
        tr.appendChild(rl);
        tr.appendChild(em);
        tr.appendChild(ad);
        tr.appendChild(pr);
        
        table.appendChild(tr);
    
       }
});
function DecodeToken(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    console.log(jsonPayload);
    var obj = JSON.parse(jsonPayload);
    console.log(obj.Username);
    return JSON.parse(jsonPayload);
      }
      
  const jsonDecoder = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
  };