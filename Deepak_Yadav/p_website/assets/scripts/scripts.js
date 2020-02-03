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
      if (responseData == 200) {
        document.getElementById("sgnup1").style.display = "none";
        document.getElementById("lgn").style.display = "flex";
      } else {
        window.alert(responseData.status);
      }
    })
    .catch(err => {
      console.log(err);
    });
};
//Sending HTTP REQUESTS, other methods can call me and pass me the required information and I'll do the rest
const sendHTTPReq = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    console.log(JSON.stringify(data));
    xhr.responseType = "json";
    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.onload = () => {
      //resolve(xhr.status + "--Token--"+xhr.response.token);
      resolve(xhr);
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
  //dummy for admin verification...hard coded..
  /*if(usn=="dy30152@gmail.com"&&psswd==1234)
  {
    var json = {
      "Email": usn,
      "Password": psswd
  };
  console.log(json);
}
else{
  console.log("no");
}*/
}
