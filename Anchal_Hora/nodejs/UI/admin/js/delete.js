document.getElementById("buttondelete").addEventListener("click",adminDeletedata)
function adminDeletedata(){ 
               
    let id = document.getElementById("id").value; 
    console.log(id.value);
       
    // Creating a XHR object 
    var xhr = new XMLHttpRequest(); 
    let url = "https://localhost:3000/employees/"+id; 


    // open a connection 
    xhr.open("DELETE", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 
            alert("deleted user")
            console.log(url);
         } 
        else{
            alert("no user with such ID");
         }
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({ "id": id.value}); 

    // Sending data with the request 
    xhr.send(data); 
}