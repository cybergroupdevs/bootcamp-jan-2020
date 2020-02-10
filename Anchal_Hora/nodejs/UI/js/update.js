document.getElementById("buttonupdate").addEventListener("click",adminupdatedata);
function adminupdatedata(){ 
    var Sno=document.getElementById("inputSno").value;
    var Username=document.getElementById("inputName").value;
    var Email=document.getElementById("inputEmail").value;
    var Password=document.getElementById("inputPassword").value;
   
       
    // Creating a XHR object 
    var xhr = new XMLHttpRequest(); 
    let url = "https://localhost:51391/api/update/"+id; 
    console.log(url);

    // open a connection 
    xhr.open("PUT", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState===4){
        if (xhr.status === 200) { 
            console.log("updated");
            alert("successfully updated");     
        } 
        else {
            alert("unsuccessful");
        }
    }
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({
    "Sno":Sno,
    "Name":Username,
    "Email":Email,
    "Password":Password }); 
    console.log(data);

    // Sending data with the request 
    xhr.send(data); 
} 