function sendJSON(){

    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;

    //creating xhr request
    var xhr = new XMLHttpRequest();
    
    let url  = "https://localhost:44371/api/Login";

    //open a connection 
    xhr.open("POST", url, true);
    
    //set the request header i.e which type of content is being sent
    xhr.setRequestHeader("Content-Type", "application/json");
    
    //create a state change callback
    xhr.onreadystatechange = function () 
    {
        mytoken = this.responseText;
        
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
    
    var data = JSON.stringifyconsole.log(data)

    xhr.send(data);
    event.preventDefault();

}