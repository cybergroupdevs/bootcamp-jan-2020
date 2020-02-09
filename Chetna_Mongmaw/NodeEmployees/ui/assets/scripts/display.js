function display(){  
    // Creating a XHR object 
    var xhr = new XMLHttpRequest(); 
    let url = "http://localhost:3001/employee"; 


    // open a connection 
    xhr.open("GET", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    //let request = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
             console.log(this.responseText);
            
            var obj = JSON.parse(this.responseText);
            var content;
            content+=  "<table border='1'>"
                 for (x in obj) {
                    content += "<tr>"+"<td>"+obj[x].r_id+"</td>"+"<td>" + obj[x].name+"</td>"+"<td>" + obj[x].username+"</td>"+
                    "<td>" + obj[x].email+"</td>"+"<td>" + obj[x].p_id+"</td>"
                    +"<td>" + obj[x].role+"</td>"+"</tr>";
             }
                  content += "</table>"    
                  document.getElementById("content").innerHTML = content;
                }
        } else if (this.response == null && this.status === 0) {
            console.log("The computer appears to be offline.");
        } else {
            console.log("error");
        }
    }
    xhr.send(null);

};
