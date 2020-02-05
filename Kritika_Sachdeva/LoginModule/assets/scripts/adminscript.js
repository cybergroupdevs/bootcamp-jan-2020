function performAction() {
  var btnvalue = document.getElementById("action-btn").value;
  var delval = document.getElementById("delid").value; //id for delete

  var httpr = new XMLHttpRequest();
  var url = "https://localhost:44341/api/Admin/";

  //for post request
  if (btnvalue == "add") {
    var name = document.getElementById("InputName").value;
    var email = document.getElementById("InputEmail").value;
    var pass = document.getElementById("InputPassword").value;
    var gender = document.getElementById("InputGender").value;
    var phone = document.getElementById("InputPhone").value;
    var date = document.getElementById("InputDate").value;
    var exp = document.getElementById("InputExp").value;

    var empdata = {
      EmpName: name,
      EmpEmail: email,
      EmpPassword: pass,
      EmpGender: gender,
      EmpPhone: phone,
      EmpJoining: date,
      EmpExp: exp
    };

    httpr.open("POST", url, true);
    httpr.responseType = "json";
    httpr.setRequestHeader("Content-type", "application/json");
    httpr.send(JSON.stringify(empdata));
  } 
  
  //for update request
  else if (btnvalue == "update") {
  } 
  
  //for delete request
  else if (btnvalue == "delete") {
    httpr.open("DELETE", url + delval, true);
    httpr.send(null);
    console.log("Deleted");
  }

  event.preventDefault();
} 
