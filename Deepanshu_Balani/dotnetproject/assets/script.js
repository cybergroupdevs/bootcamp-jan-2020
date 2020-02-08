
var formdata={};
//this function generates http post request(creation of data)
  function generatehttppost(formdata) {
       const xhr = new XMLHttpRequest();
       //url for http post request
       const url = "https://localhost:44351/api/bootcamp_company";
         xhr.open("POST", url, true);
         // sets  setrequestheader
         xhr.setRequestHeader("Content-type", "application/json");
  
         console.log(JSON.stringify(formdata));
          console.log(typeof formdata);
          console.log(typeof JSON.stringify(formdata));
          //we have to convert JSON data into string
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
//this function gets called when user presses submit button
  function register() {
       var formdata = readformdata();
       var res = generatehttppost(formdata);
       if(res="record updated")
           location.href="loginui.html"
}
//Delting the data
function generatehttpdelete(formdata) {
        const xhr = new XMLHttpRequest();
          xhr.open(/*to be implemented*/
                 "DELETE",
                 "https://localhost:44334/api/bootcamp_company",
                  true
                  );
  xhr.setRequestHeader("Content-type", "application/json");
}
function generatehttpput(formdata) { /*to be implemented*/
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://localhost:44334/api/bootcamp_company", true);
}
//this function gets called when the user presses login btn
function login() {
  var credentials = {};
  credentials["Email"] = document.getElementById("em").value;
  credentials["Password"] = document.getElementById("pass").value;
  Email = credentials.Email;
  Password = credentials.Password;
  generatehttpget(Email, Password);

  console.log(formdata);
}
// this function generates the http get request
function generatehttpget(Email, Password) {
  //instantiate an xhr object
  const xhr = new XMLHttpRequest();
  // open the object
  xhr.open(
    "GET",
    "https://localhost:44334/api/bootcamp_company/login"
    ,true);
  
  // want to show progress
  xhr.getResponseHeader("Content-type", "application/json");
     xhr.onprogress = function() { //to show progress
          console.log("on progress");
       };

  xhr.onload = function() {  //to check status of response
    if (this.status == 200) {
    
          location.href="loginui.html";
    } else {
      console.log("some error occured");
    }
  };
  xhr.send();
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
