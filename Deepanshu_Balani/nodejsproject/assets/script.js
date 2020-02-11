
var formdata={};

var credentials = {};
//this function generates http post request(creation of data)

//this function gets called when user presses submit button

 function generatehttppost(formdata) {
  const xhr = new XMLHttpRequest();
  //return it as a promise
 
    const url = "http://localhost:4000/emoployees";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
  
    console.log(JSON.stringify(formdata));
    console.log(typeof formdata);
    console.log(typeof JSON.stringify(formdata));
   
    xhr.send(JSON.stringify(formdata));
    xhr.onprogress = function() {
      console.log("on progress");
    };
    xhr.onload = async function() {
      
      if (this.status == 200) {
            
              res=await this.responsetext;
              console.log(res);
        
      } else {
        console.log("some error occured");
        
			
      }
    }
    
    
    let res = xhr.response;
    console.log(res);
     return res;
 
}
function register() {
  // alert("you have registered successfully");
  var formdata = readformdata();
  // formdata.push(formdata_new);
  var res = generatehttppost(formdata);
  if(res="record updated")
     location.href="loginui.html"
}
//Delting the data
function generatehttpdelete(formdata) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "DELETE",
    "http://localhost:4000/employees",
    true
  );
  xhr.setRequestHeader("Content-type", "application/json");
}
function generatehttpput(formdata) {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://localhost:4000/employees", true);
}
//this function gets called when the user presses login btn
function login() {
  
  credentials["Email"] = document.getElementById("em").value;
  credentials["Password"] = document.getElementById("pass").value;
   GeneratehttpGet_Login(credentials);
   console.log(credentials);
}

// this function generates the http get request
function GeneratehttpGet_Login(credentials) {
  //instantiate an xhr object
  const xhr = new XMLHttpRequest();
  // open the object
  xhr.open(
    "GET",
    "https://localhost:4000/login",true);
  
  // want to show progress
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onprogress = function() {
    console.log("on progress");
  };
  xhr.onload =async  function() {
    if (this.status == 200) {

          token=await this.response;
          location.href="loginui.html";
    } else {
      console.log("some error occured");
    }
  };
  console.log(token);
  xhr.send(credentials);
}

//this function reads the form data from user while registration
function readformdata() {
  var formdata_new = {};
  formdata_new["Name"] = document.getElementById("id1").value;
  formdata_new["Gender"] = document.getElementById("id2").value;
  formdata_new["Age"] = parseInt(document.getElementById("id3").value);
  formdata_new["Email"] = document.getElementById("id4").value;
  formdata_new["Password"] = document.getElementById("id5").value;
  formdata_new["Role"] = document.getElementById("id6").value;

  console.log(formdata_new);
  return formdata_new;
}
