function sendJSON(){
    let name = document.getElementById("exampleInputName1").value;
    console.log(name);
    let username = document.getElementById("exampleInputUsername1").value;

    let role = document.getElementById("exampleInputRole1").value
    let email = document.getElementById("exampleInputEmail1").value
    let password = document.getElementById("exampleInputPassword1").value
    let projectID = document.getElementById("exampleInputProjectID1").value


console.log(name)

// var obj = {
//     firstName: 'Himanshu',
//     lastName: "Bansal",

// }

//Creating a XHR request
var xhr=new XMLHttpRequest();
let url = "https://localhost:44371/api/signup";

//open a connection
xhr.open("POST", url, true);

//set the request header that which type is being send
xhr.setRequestHeader("Content-Type", "application/json");

//creating a state change callback
xhr.onreadystatechange  = function() {
    if (xhr.readyState==4 && xhr.readyState==200){
        alert("successfuly registered");

    }
}

//conerting JSON data to string 
var data = JSON.stringify({"Name":name, "Username":username, "Role":role, "Email":email, "Password":password, "ProjectID":projectID})


//sending data with request
xhr.send(data);

event.preventDefault();
}
