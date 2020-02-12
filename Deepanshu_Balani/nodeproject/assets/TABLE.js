//var formdata=[{}];\
  function generatehttpget(){
    //instaate an xhr object
    setTimeout(display,4000);
    const xhr = new XMLHttpRequest();
    // open the object
    xhr.open('GET','https://localhost:5000/employees',true);
    // want to show progress
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.responseType='json';
 
  xhr.onprogress =  function() {
    console.log("on progress");
  };
  
  xhr.onload = async function() {
    if (this.status == 200) {
         formdata =  await xhr.response;
        
         console.log(formdata);
         

        
    } else {
      console.log("some error occured");
    }
  }
 xhr.send();
  
 
}
       
   

    
function generateTableHead(table,data){
    let thead=table.createTHead();
    let row=thead.insertRow();
    for(let key of data){
        let th=document.createElement("th");
        if(key!="password"){
        let text=document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        }
    }
    
    var btn=document.createElement("div");
   btn.innerHTML="operations";
    row.appendChild(btn);
    
  }
  




function generateTable(table,formdata){
    
    
     for(let element of formdata){  
      let row=table.insertRow();    
    for(let key in element){
                  if(key!="password"){
               let cell=row.insertCell();
               let text=document.createTextNode(element[key]);
               cell.appendChild(text);
               if(key=="role"&&element[key]=="Admin"){
                let cell=row.insertCell();
                 var btn=document.createElement("button");
                 btn.innerHTML="Update";
                  
                 cell.appendChild(btn);
                  cell=row.insertCell();
                 var btn=document.createElement("button");
                 btn.innerHTML="delete";
                 cell.appendChild(btn);

               }
               else if(key=="role"&&element[key]=="project manager"){
                let cell=row.insertCell();
                 var btn=document.createElement("button");
                 btn.innerHTML="Update";
                  
                 cell.appendChild(btn);
                 

               }
               else if(key="role"&&element[key]=="Employee"){
                let cell=row.insertCell();
                var space=document.createElement("div");
                space.innerHTML="    ";
                 
                cell.appendChild(space);
               }
           
          }
    
      }
    }
}
var formdata=[{}];




//console.log(typeof(formdata));
function display(){
console.log(formdata);
 var table =document.querySelector("table");
 var data=Object.keys(formdata[0]);
 generateTableHead(table,data);
 generateTable(table,formdata); 
}
generatehttpget(formdata);

