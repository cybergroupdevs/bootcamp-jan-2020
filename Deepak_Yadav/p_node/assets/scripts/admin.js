// const jwtToken = localStorage.getItem("JwtToken");
//this function will display the employee details in tabular form to admin
function tabularData() {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:3000/employees";
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var userdata = {};
      userdata = JSON.parse(xhr.response);
      console.log(userdata);
      console.log(userdata.length);
      console.log(userdata[1].Name);
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
function deletionByid() {
  window.location.href = "./adminDelete.html";
}
//for deleting the employee
//after verification this request can be made
function deleteData() {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:3000/employees";
  xhr.open("DELETE", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)
      console.log("deleted");
  };
}
//for updating the employee details
function updateDetails() {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:3000/employees";
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)
      console.log("updated");
  };
}
