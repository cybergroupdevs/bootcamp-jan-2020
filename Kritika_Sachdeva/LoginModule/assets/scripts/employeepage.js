//for decoding the token
function findRole() {
    var mailid = localStorage.getItem('email');
    console.log(mailid);

    //GET request to fetch employee data
    var httpr = new XMLHttpRequest();
    var url = "https://localhost:44341/api/EmpDetails";
    httpr.open("GET", url, true);
    console.log("requesting...");
    httpr.send(null);
    console.log("requested...");
    
}

