function sendJSON(){ 
    let r_id = document.getElementById("r_id").value;
    let name = document.getElementById("name").value;          
    let username = document.getElementById("username").value; 
    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value; 
    let p_id = document.getElementById("p_id").value;
    let role = document.getElementById("role").value;
   
    console.log(email);
       
    // Creating a XHR object 
    var xhr = new XMLHttpRequest(); 
    let url = "http://localhost:3001/employee/register"; 

    // open a connection 
    xhr.open("POST", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState===4){
        if (xhr.status === 200) { 
            //var result;
            // Print received data from server 
            //result.innerHTML = this.responseText; 
            console.log("registered");
            alert("successfully registered");    
            // Converting JSON data to string 
            //var data = JSON.stringify({ "Name": name.value, "Username": username.value, "Password": password.value,
            //"ProjectId": p_id.value, "Role": role.value }); 

            // Sending data with the request 
            //xhr.send(data);         
        } 
        else {
            alert("unsuccessful");
        }
    }
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({ "r_id":r_id,"name": name,"email": email, "username": username, "password": password,
    "p_id": p_id, "role": role }); 
    console.log(data);

    // Sending data with the request 
    xhr.send(data); 
} 