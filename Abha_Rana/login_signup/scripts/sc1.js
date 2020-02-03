document.getElementById("btn").addEventListener("click",login);
function login()
{
 
  var Username=document.getElementById("Username").value;
  var Password=document.getElementById("Password").value; 
  var loginObj={
   "Username":Username,
   "Password":Password
  };
  console.log(loginObj);

    const http = new XMLHttpRequest();
    const url = "http://localhost:44352/api/login";
     http.open("POST", url,true);
        http.setRequestHeader("Content-type", "application/json");
    console.log(JSON.stringify(loginObj));
     http.send(JSON.stringify(loginObj));
     http.onreadystatechange = (e) => {
      console.log(http.responseText);
    }
   
     event.preventDefault();
     //location.href="../html/admin.html";

  }
  


/*var loginObj = {
  Username: "",
  Password: ""
};

var btn=document.getElementById("#btn");
if(btn)
{
btn.addEventListener("click", () => {
  for (let key in loginObj) {
    loginObj[key] = document.getElementById(key).value.trim();
  }
  console.log(loginObj);

  requestToApi();

  event.preventDefault();
});

requestToApi = () => {
  var { Username, Password } = loginObj;

  if (Username.trim().length >= 5 && Password.trim().length >= 6) {
    const http = new XMLHttpRequest();
    const url = "https://localhost:44352/api/login";

    http.open("POST", url);
    http.setRequestHeader("Content-type", "application/json");

    console.log(JSON.stringify(loginObj));

    http.send(JSON.stringify(loginObj));

    http.onreadystatechange = e => {
      console.log(http);
      
        window.location.href = "admin.html";
      }
      console.log(http.responseText);
  
    };
  
};
}

/*function Validate()

    {

    var UName=document.getElementById('uname').value;

    var Password=document.getElementById('pass').value;

   if((UName.value=='') || (Password.value==''))

    { alert('UserName or Password should not be blank');
      return false;
    }
    else
    { 
      $( document ).ready(function() {
        $("#btn").click(function(){
        var objectdata = {
        "uname": UName,
        "pass": pass
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
        xhttp.open("POST", "https://localhost:44352/api/login/validate", true);
        xhttp.send(objectdata);
      }
    };
  });
});
function login()
{
     var Username=document.getElementById("uname").value;
     var Password=document.getElementById("pass").value; 
     var userdata={
      "Username":Username,
      "Password":Password
     };
      console.log(userdata);
      var xhr = new XMLHttpRequest();
      var url="https://localhost:44352/api/login";
      xhr.open("POST", url,true);
      xhr.responseType='json';
      xhr.setRequestHeader('Content-type', 'application/json');
      console.log(JSON.stringify(userdata));
      xhr.send(JSON.stringify(userdata));
      
  
  location.href="../html/admin.html";
}*/