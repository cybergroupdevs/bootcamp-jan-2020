document.getElementById("loginbtn").addEventListener("click", login);

function login() {
  var EmpEmail = document.getElementById("login-email").value;
  var EmpPassword = document.getElementById("login-password").value;

  var loginObj = {
    EmpEmail: EmpEmail,
    EmpPassword: EmpPassword
  };
  console.log(loginObj);

  //sending login details
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    const url = "https://localhost:44341/api/Login";
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
      }
    };
    http.onerror = () => {
      reject("Error!");
    };
  });
  promise
    .then(temp => {
      SaveToken(temp.response.token);
      DecodeToken(temp.response.token);
      window.location.href = './employeepage.html';
      
    })
    .catch(err => {
          console.log("error occurred");
          window.alert("Invalid user/password!");
    });

    event.preventDefault();
}

//function for saving token in local storage
function SaveToken(token) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("JWTtoken", token);
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
  DecodeToken(token);
}

//function for decoding the token
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
      
    claims= JSON.parse(jsonPayload);
      
    localStorage.setItem("email", claims["email"]);
    localStorage.setItem("Urole", claims["Urole"]);
    localStorage.setItem("exp", claims["exp"]);

}
