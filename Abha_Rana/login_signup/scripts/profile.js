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
        
    
        var node1 = document.createTextNode(x.name);
        var node2 = document.createTextNode(x.username);
        var node3 = document.createTextNode(x.phone);
        var node4 = document.createTextNode(x.role);
        var node5 = document.createTextNode(x.email);
        var node6 = document.createTextNode(x.address);
        var node7 = document.createTextNode(x.project);

        let name = document.createElement("td");
        let username = document.createElement("td");
        let phone = document.createElement("td");
        let role = document.createElement("td");
        let email = document.createElement("td");
        let address = document.createElement("td");
        let project=  document.createElement("td");

        
        name.appendChild(node1);
        username.appendChild(node2);
        phone.appendChild(node3);
        role.appendChild(node4);
        email.appendChild(node5);
        address.appendChild(node6);
        project.appendChild(node7);

        
        tr.appendChild(name);
        tr.appendChild(username);
        tr.appendChild(phone);
        tr.appendChild(role);
        tr.appendChild(email);
        tr.appendChild(address);
        tr.appendChild(project);
        
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