function check() {
  var form = document.getElementById("login-form");
  if (form.checkValidity()) {
    postData();
    form.reset();
  } else window.alert("wrong format");
}

function postData() {
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

  //posting signup details
  var httpr = new XMLHttpRequest();
  var url = "https://localhost:44341/api/Employee";
  httpr.open("POST", url, true);
  httpr.responseType = "json";
  httpr.setRequestHeader("Content-type", "application/json");
  httpr.send(JSON.stringify(empdata));

  window.alert("Employee registered!");
  event.preventDefault();
}