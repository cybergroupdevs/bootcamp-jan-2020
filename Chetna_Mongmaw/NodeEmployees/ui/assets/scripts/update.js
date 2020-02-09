function deleteUser(){ 
               
    let id = document.getElementById("id").value; 
    console.log(id.value);
       
    // Creating a XHR object 
    var xhr = new XMLHttpRequest(); 
    let url = "http://localhost:3001/employee/"+id; 


    // open a connection 
    xhr.open("DELETE", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4){
            if(xhr.status === 200) { 
            //var result;
            // Print received data from server 
            //result.innerHTML = this.responseText; 
            //window.open("./list.html")
            alert("deleted user")
            console.log(url);

            
        } 
        else{
            alert("no user with such ID");
        }
    }
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({ "id": id.value}); 

    // Sending data with the request 
    xhr.send(data); 
} 

function updateUser(){ 
    let id = document.getElementById("r_id").value;
    let name = document.getElementById("name").value;          
    let username = document.getElementById("username").value; 
    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value; 
    let p_id = document.getElementById("p_id").value;
    let role = document.getElementById("role").value;
   
       
    // Creating a XHR object 
    var xhr = new XMLHttpRequest(); 
    let url = "http://localhost:3001/employee/"+id; 
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
    var data = JSON.stringify({ "r_id": id,"ProjectId": p_id,"Name": name,"Email": email, "Username": username, "Password": password,
     "Role": role }); 
    console.log(data);

    // Sending data with the request 
    xhr.send(data); 
} 