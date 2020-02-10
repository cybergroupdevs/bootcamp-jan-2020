// const jwtToken = localStorage.getItem("JwtToken");
//this function will display the employee details in tabular form to admin
function tabulardata() {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:3000/employees";
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var userdata={};
      userdata = JSON.parse(xhr.response);
      console.log(userdata);
      console.log(userdata.length)
      console.log(userdata[1].Name);
      var html = "<table border='1|1'>";
      for (var i = 0; i < userdata.length; i++) {
        html += "<tr>";
        html += "<td>" + userdata[i].Name + "</td>";
        html += "<td>" + userdata[i].Designation + "</td>";
        html += "<td>" + userdata[i].Email + "</td>";
        html += "</tr>";
      }
      html += "</table>";
      document.getElementById("tableID").innerHTML = html;
    }
  };
}
function deletionbyid(){
  window.location.href="./admindelete.html"
}
//for deleting the employee
//after verification this request can be made
function deletedata(){
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:3000/employees";
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
  var url = "http://localhost:3000/employees";
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) 
        console.log("updated");
    }
}
