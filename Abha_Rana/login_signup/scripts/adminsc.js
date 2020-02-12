let accesstoken=localStorage.getItem("JWTtoken");
//document.getElementById("add__new__list").addEventListener("click", addUser);
let data = DecodeToken(accesstoken);
let obj = {
  Role: data.Role,
  Username: data.Username
};


function drawTable()
{
  var xhr = new XMLHttpRequest();
  var url="https://localhost:44352/api/data";
  xhr.open("GET", url,true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var userdata=JSON.parse(xhr.response);
      console.log(userdata);
  var table = document.getElementById("empTable");
       for(let i=0; i<userdata.length; i++){
        let tr = document.createElement("tr");
        
        var userdata= userdata[i];
        console.log(x);
        
        var a = document.createTextNode(i+1);
        var b = document.createTextNode(x.name);
        var c = document.createTextNode(x.username);
        var d = document.createTextNode(x.phone);
        var e = document.createTextNode(x.role);
        var f = document.createTextNode(x.email);
        var g = document.createTextNode(x.address);
        var h = document.createTextNode(x.project);

        let indx = document.createElement("td");
        let name = document.createElement("td");
        let username = document.createElement("td");
        let phone = document.createElement("td");
        let role = document.createElement("td");
        let email = document.createElement("td");
        let address = document.createElement("td");
        let project=  document.createElement("td");

        indx.appendChild(a);
        nm.appendChild(b);
        usn.appendChild(c);
        ph.appendChild(d);
        rl.appendChild(e);
        em.appendChild(f);
        ad.appendChild(g);
        pr.appendChild(h);

        tr.appendChild(indx);
        tr.appendChild(name);
        tr.appendChild(username);
        tr.appendChild(phone);
        tr.appendChild(role);
        tr.appendChild(email);
        tr.appendChild(address);
        tr.appendChild(project);
        
        table.appendChild(tr);
    
}
}
}
}
function decodeToken(token) {
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

window.onload = () => {
  //document.getElementById("empRole").style.display = "none";
  if (typeof(Storage) !== "undefined") {
      const token = localStorage.getItem("JWTtoken");
      if(token != null){
          var jsonPayload = jsonDecoder(token);
          console.log(jsonPayload)
         // document.getElementById("userName").innerHTML = jsonPayload.Username;
          drawTable();
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
const viewdetails = () => {
  window.location.href="profile.html";
  
}
const deleteuser = () => {
  var n=window.prompt("enter name of user you want ot delete:","Name");
  var ob={ "name":n};
  var xhr = new XMLHttpRequest();
  var url="https://localhost:44352/api/data";
  xhr.open("DELETE", url,true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(ob));
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var userdata=xhr.response;
      console.log(userdata);
      window.alert(userdata);
}
  }
}
const updateuser = () => {
  var n=window.prompt("enter name :","Name");
  var e=window.prompt("enter email :","email");
  var a=window.prompt("enter address :","address");
  var ob={ "Name":n,
"Email": e,
"Address": a};
  var xhr = new XMLHttpRequest();
  var url="https://localhost:44352/api/data";
  xhr.open("PUT", url,true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(ob));
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var userdata=xhr.response;
      console.log(userdata);
      window.alert(userdata);
}
  }
}


document.getElementById("logOut").addEventListener('click', lgout);
document.getElementById("profile").addEventListener('click', viewdetails);
document.getElementById("delete").addEventListener('click', deleteuser);
document.getElementById("update").addEventListener('click', updateuser);
