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
        console.log(mytoken);
        // console.log(xhr.responseText);
        // console.log(xhr);
        if (XMLHttpRequest.DONE && xhr.status ===200)
        {
            window.open("./signup.html");
            
            // console.log(mytoken);
            // console.log(xhr);
        }
        else
        {
            alert("not registered user");
        }
        


    };
    // console.log(xhr);
    let obj = {"email": email, "password": password};
    
    var data = JSON.stringify(obj);
    console.log(data)

    xhr.send(data);
    event.preventDefault();

}