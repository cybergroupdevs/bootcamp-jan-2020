document.getElementById("btn").addEventListener("click", login);

function login() {
  var Username = document.getElementById("Username").value;
  var Password = document.getElementById("Password").value;
  var loginObj = {
    Username: Username,
    Password: Password
  };
  console.log(loginObj);
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    const url = "https://localhost:44352/api/login";
    http.open("POST", url, true);
    http.responseType = "json";
    if (loginObj) {
      http.setRequestHeader("Content-Type", "application/json");
     }
    console.log(JSON.stringify(loginObj));
    http.send(JSON.stringify(loginObj));
    http.onload = function() {
      resolve(http);
      if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        console.log(http.response.token);
        if(responseData.status == 200){
          saveToken(responseData.response.token);
          var payload = decodeToken(responseData.response.token);
          if(payload.Role === "Admin")
              window.location.href = "./admin.html";
          else if(payload.Role === "Employee")
              window.location.href = "./profile.html";
          else if(payload.Role==="Project Manager")
              window.location.href = "./profile.html";
      }
      else if(responseData.status == 401){
          window.alert("Unauthorized");
      }
      else{
          window.alert(responseData.status);
      }
      }
    };
    http.onerror = () => {
      reject("Error!");
    };
  });
}  

function saveToken(token) {
  console.log(token);
  if (typeof Storage !== "undefined") {
    localStorage.setItem("JWTtoken", token);
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}

function decodeToken(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(atob(base64).split("").map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
  console.log(jsonPayload);
  var obj = JSON.parse(jsonPayload);
  console.log(obj.Username);
  return JSON.parse(jsonPayload);
}

