function sendJSON(){ 
    let name = document.getElementById("name").value;          
    let username = document.getElementById("username").value; 
    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value; 
    let p_id = document.getElementById("p_id").value;
    let role = document.getElementById("role").value;
   
    console.log(email);
       
    // Creating a XHR object 
    var xhr = new XMLHttpRequest(); 
    let url = "https://localhost:44348/api/operations"; 

    // open a connection 
    xhr.open("POST", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState===4){
        if (xhr.status === 200) { 
            console.log("registered");   
        } 
        else {
            alert("unsuccessful");
        }
    }
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({ "Name": name,"Email": email, "Username": username, "Password": password,
    "ProjectId": p_id, "Role": role }); 
    console.log(data);

    // Sending data with the request 
    xhr.send(data); 
} 