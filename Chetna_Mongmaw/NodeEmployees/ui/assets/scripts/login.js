function sendJSON(){ 
               
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value; 
    let role = document.getElementById("role").value;
    console.log(username);
    console.log(password);
    console.log(role);
    // Creating a XHR object 
    var xhr = new XMLHttpRequest(); 
    let url = "http://localhost:3001/employee/login"; 

    // open a connection 
    xhr.open("POST", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if(xhr.readyState===4){
            if(xhr.status==200){
                console.log(this.response);
                SaveToken(this.response);
                DecodeToken(this.response); 
                
                
                window.open("./list.html");
        }          
        else{
            alert("Wrong credentials");
        }
    }}
     

    // Converting JSON data to string 
    var data = JSON.stringify({ "username": username, "password": password,"role": role }); 

    // Sending data with the request 
    xhr.send(data); 
}
    //saving token in local storage
    function SaveToken(token){
        if(typeof Storage !=="undefined"){
            localStorage.setItem("JWTtoken",token);
        }
        else{
            console.log("Sorry, your browser does not support web storage");
        }
        DecodeToken(token);
    }

    //for decoding the token
    
    function DecodeToken (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        console.log(jsonPayload);
        return JSON.parse(jsonPayload);
    }

