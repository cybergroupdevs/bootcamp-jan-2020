// const jwtToken = localStorage.getItem("JwtToken");
function createTable()
{
  
  var xhr = new XMLHttpRequest();
  var url="https://localhost:44366//api/companyinfo";
  xhr.open("GET", url,true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var userdata=xhr.response;
      console.log(userdata);

    }
  };
}
createTable();
function tabulardata() { 
var table = document.getElementById("tableID"); 
var columnLength = 10; console.log(columnLength);
var row = table.insertRow(0);

for(i=0; i<columnLength; i++){
    var cell = cell+i;
    var cell = row.insertCell(i);
    var jwtToken = localStorage.getItem("JwtToken");
    var parsedJwt = parseJwt(jwtToken);
    console.log(parsedJwt)
    cell.innerHTML = "NEW CELL1";
}
}
function parseJwt (jwtToken) { var base64Url = jwtToken.split('.')[1]; 
var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) { 
return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''));

console.log(JSON.parse(jsonPayload));
return JSON.parse(jsonPayload);
};