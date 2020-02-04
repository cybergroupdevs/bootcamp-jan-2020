
var formdata={};
function generateTableHead(table,formdata){
  let thead=table.createTHead();
  let row=thead.insertRow();
  for(let key of formdata){
      let th=document.createElement("th");
      let text=document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
  }

}
function generateTable(table,formdata){
  let row=table.insertRow();
         
  for(let key in formdata){
     
             let cell=row.insertCell();
             let text=document.createTextNode(formdata[key]);
             cell.appendChild(text);
         }
  }

//this function generates http post request(creation of data)

//this function gets called when user presses submit button

 function generatehttppost(formdata) {
  const xhr = new XMLHttpRequest();
  //return it as a promise
 
    const url = "https://localhost:44351/api/company6";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
  
    console.log(JSON.stringify(formdata));
    console.log(typeof formdata);
    console.log(typeof JSON.stringify(formdata));
   
    xhr.send(JSON.stringify(formdata));
    xhr.onprogress = function() {
      console.log("on progress");
    };
    xhr.onload = function() {
      
      if (this.status == 200) {
            
        alert(this.responsetext);
        //     location.href="loginui.html";
      } else {
        console.log("some error occured");
        
			
      }
    }
    
    
    let res = xhr.response;
    console.log(res);
     return res;
  });
}
  
  
  
  
  
  
  
  
  
  
  
function register() {
  // alert("you have registered successfully");
  var formdata = readformdata();
  // formdata.push(formdata_new);
  var res = generatehttppost(formdata);
  if (res == true) window.location.href = "loginui.html";
  let btn = document.getElementById("btn");
 // btn.addEventListener("click", () => {
    

generateTable(table,formdata);
console.log(table);
    
  
  
}
//Delting the data
function generatehttpdelete(formdata) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "DELETE",
    "https://localhost:44334/api/company/ApiWithActions/5",
    true
  );
  xhr.setRequestHeader("Content-type", "application/json");
}
function generatehttpput(formdata) {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://localhost:44334/api/company", true);
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
    "https://localhost:44334/api/company6/5?Email=" +
      Email +
      "&Password=" +
      Password,
    true
  );
  // want to show progress
  xhr.getResponseHeader("Content-type", "application/json");
  xhr.onprogress = function() {
    console.log("on progress");
  };
  xhr.onload = function() {
    if (this.status == 200) {
      alert(this.responsetext);
      //     location.href="loginui.html";
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
var table =document.querySelector("table");
var data=Object.keys(formdata);
generateTableHead(table,data);
