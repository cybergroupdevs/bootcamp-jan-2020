function senddata() {
  //retreiving and storing values in the form of json
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phn").value;
  var address = document.getElementById("role").value;
  var usn = document.getElementById("email").value;
  var psswd = document.getElementById("pswd").value;
  console.log(psswd);
  var json = {
    Name: name,
    PhoneNo: phone,
    Designation: address,
    Email: usn,
    Password: psswd
  };
  sendData(json);
  console.log(json); //for debugging
}
//for sending signup details to  api and then to database
const sendData = json => {
  sendHTTPReq("POST", "https://localhost:44366//api/companyinfo", json)
    .then(responseData => {
      console.log(responseData);
      if (responseData.status == 200) {
         window.location.href="index.html";
      } else {
        window.alert(responseData.status);
      }
    })
    .catch(err => {
      console.log(err);
    });
};
function parseJwt (tokenA) {
  var base64Url = tokenA.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  readabletoken(JSON.parse(jsonPayload));
  return JSON.parse(jsonPayload);
};
//Sending HTTP REQUESTS, other methods can call me and pass me the required information and I'll do the rest
const sendHTTPReq = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    //console.log(JSON.stringify(data));
    xhr.responseType = "json";
    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.onload = () => {
      resolve(xhr);
      if(xhr.status==401)
      {
        window.alert("Unauthorised");
      }
    };
    xhr.onerror = () => {
      reject("Something went wrong");
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
};
function showdata() {
  var usn = document.getElementById("email").value;
  var psswd = document.getElementById("pswd").value;
  console.log(psswd);
  var json = {
    Email: usn,
    Password: psswd
  };
  sendHTTPReq("post","https://localhost:44366/api/login",json)
  .then((xhr) => {
      console.log(xhr.response.token);
      console.log(typeof(xhr.response));
      console.log(typeof(xhr.response.token));
      window.location.href="admindashboard.html";
      ///let  tokenA = {} ;
      let tokenA = xhr.response.token;
      console.log(tokenA);
      saveToken(tokenA)
      parseJwt(tokenA);     
  });
}

function saveToken(token){
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem("JwtToken", token);
  } else {
    console.log("sorry no web storage");
  }
}
function readabletoken(jsonPayload){
  console.log(jsonPayload);
}