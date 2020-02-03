
 var formdata={};
//this function generates http post request(creation of data)

//this function gets called when user presses submit button
function register(){
 // alert("you have registered successfully");
    var formdata_new=readformdata();
      // formdata.push(formdata_new);
       generatehttppost(formdata_new);
       
        // location.href="login_signup.html";
        
       
    
    
  
}
function generatehttppost(formdata){
  const xhr=new XMLHttpRequest();
  const url='https://localhost:44334/api/company';
  xhr.open('POST',url,true);
  xhr.getResponseHeader('content-type','application/JSON');

      console.log(JSON.stringify(formdata));
      xhr.send(JSON.stringify(formdata));
      let res = xhr.response;
     

}
//Delting the data 
function generatehttpdelete(formdata){
  const xhr=new XMLHttpRequest();
  xhr.open('DELETE','https://localhost:44334/api/company/ApiWithActions/5',true);
   
  
}
/*function generatehttpput(formdata){
  /*     under construction  
  const xhr=new XMLHttpRequest();
  xhr.open('PUT','https://localhost:44334/api/company',true);


}*/
//this function gets called when the user presses login btn
function login(){
  var credentials={};
  credentials["Email"]=document.getElementById("em").value;
  credentials["Password"]=document.getElementById("pass").value;
    Email=credentials.Email;
    Password=credentials.Password;
                 generatehttpget(Email,Password);
                   location.href="loginui.html";
          console.log(formdata);
         let table=document.querySelector("table");
       document.addEventListener("click", generateTable(table,formdata))
     
       
    }

// this function generates the http get request
  function generatehttpget(Email,Password){
    
      //instantiate an xhr object
      const xhr=new XMLHttpRequest();
     // open the object
      xhr.open('GET',"https://localhost:44334/api/company?Email="+Email+"&Password="+Password,true);
     // want to show progress
    
      xhr.onprogress=function(){

         console.log("on progress");
         
          }
      xhr.onload=function(){
           if(this.status==200){
             alert((this.responsetext));
        //     location.href="loginui.html";
           }
           else{

            console.log("some error occured"); 
           }
      
      }
      xhr.send();

  }




  


//this function reads the form data from user while registration
function readformdata(){
  var formdata_new={};
  formdata_new["Name"]=document.getElementById("id1").value;
  formdata_new["Gender"]=document.getElementById("id2").value;
  formdata_new["Age"]=document.getElementById("id3").value;
  formdata_new["Email"]=document.getElementById("id4").value;
  formdata_new["Password"]=document.getElementById("id5").value;
  formdata_new["Role"]=document.getElementById("id6").value;
  return formdata_new;

}


//this function creates the table header
function generateTableHead(table,data){

     let thead=table.createTHead();
       let row=thead.insertRow();
                 for(let key of data){
                   if(key!="password"){
                let th=document.createElement("th");
                let text=document.createTextNode(key);
                console.log(data[key], "key", text, 'text')
                th.appendChild(text);
                row.appendChild(th);
                   }
             }
}
//this function generates the table

function generateTable(table,data){
  let header=Object.keys(formdata[0]);
           generateTableHead(table,header);
      for(let element of data){
        let row=table.insertRow(); 
                    for(key in element){
                        if(key!="password"){
                        let cell=row.insertCell();
                        let text=document.createTextNode(element[key]);
                        cell.appendChild(text);
                          }
                      }
              }
  }
