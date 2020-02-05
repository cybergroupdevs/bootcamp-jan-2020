// const jwtToken = localStorage.getItem("JwtToken");
function tabulardata() {
  var xhr = new XMLHttpRequest();
  var url = "https://localhost:44366//api/companyinfo";
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var userdata={};
      userdata = JSON.parse(xhr.response);
      console.log(userdata);
      console.log(userdata[1].name);
      var html = "<table border='1|1'>";
      for (var i = 0; i < userdata.length; i++) {
        html += "<tr>";
        html += "<td>" + userdata[i].name + "</td>";
        html += "<td>" + userdata[i].designation + "</td>";
        html += "<td>" + userdata[i].email + "</td>";
        html += "</tr>";
      }
      html += "</table>";
      document.getElementById("tableID").innerHTML = html;
    }
  };
}
//for deleting the employee
//after verification this request can be made
function deletedata(){
  var xhr = new XMLHttpRequest();
  var url = "https://localhost:44366//api/admin/7";
  xhr.open("DELETE", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) 
        console.log("deleted");
    }
}
//for updating the employee details
function updatedetails(){
  var xhr = new XMLHttpRequest();
  var url = "https://localhost:44366//api/admin/7";
  xhr.open("PATCH", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) 
        console.log("updated");
    }
}
/*
function(data){ 
            if(data){
                var len = data.length;
                var txt = "";
                if(len > 0){
                    for(var i=0;i<len;i++){
                        if(data[i].city && data[i].cStatus){
                            txt += "<tr><td>"+data[i].city+"</td><td>"+data[i].cStatus+"</td></tr>";
                        }
                    }
                    if(txt != ""){
                        $("#table").append(txt).removeClass("hidden");
                    }
                }
            }*/
            /*
function tabulardata() {
  var table = document.getElementById("tableID");
  var columnLength = 10;
  console.log(columnLength);
  var row = table.insertRow(0);

  for (i = 0; i < columnLength; i++) {
    var cell = cell + i;
    var cell = row.insertCell(i);
    var jwtToken = localStorage.getItem("JwtToken");
    var parsedJwt = parseJwt(jwtToken);
    console.log(parsedJwt);
    cell.innerHTML = "NEW CELL1";
  }
}*/
function parseJwt(jwtToken) {
  var base64Url = jwtToken.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  console.log(JSON.parse(jsonPayload));
  return JSON.parse(jsonPayload);
}

/*
var rows = [{
  name: "John",
  age: 20,
  email: "xx@hotmail.com"
}, {
  name: "Jack",
  age: 50,
  email: "xxx@hotmail.com"
}, {
  name: "Son",
  age: 45,
  email: "xxxx@hotmail.com"
}];

var html = "<table border='1|1'>";
for (var i = 0; i < rows.length; i++) {
  html+="<tr>";
  html+="<td>"+rows[i].name+"</td>";
  html+="<td>"+rows[i].age+"</td>";
  html+="<td>"+rows[i].email+"</td>";

  html+="</tr>";

}
html+="</table>";
document.getElementById("box").innerHTML = html;*/
