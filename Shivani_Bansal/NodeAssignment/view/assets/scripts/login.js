function sendJSON(){

    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;

    //creating xhr request
    var xhr = new XMLHttpRequest();
    
    let url  = "http://localhost:3000/login";

    //open a connection 
    xhr.open("POST", url, true);
    
    //set the request header i.e which type of content is being sent
    xhr.setRequestHeader("Content-Type", "application/json");
    
    //create a state change callback
    xhr.onreadystatechange = function () 
    {
        mytoken = this.responseText;
        
        console.log(mytoken);
        
        if (XMLHttpRequest.DONE && xhr.status ===200)
        {
            window.open("./dashboard.html");
        }
        else
        {
            alert("not registered user");
        }
    
    };
    
    let obj = {"email": email, "password": password};
    // console.log(obj);
    var data = JSON.stringify(obj)

    // console.log(data);
    xhr.send(data);
    event.preventDefault();
}