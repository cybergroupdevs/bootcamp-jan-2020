//for decoding the token
function findRole() {
    var mailid = localStorage.getItem('email');
    console.log(mailid);

    //GET request to fetch employee data
    var httpr = new XMLHttpRequest();
    var url = "https://localhost:44341/api/Admin/";
    httpr.open("GET", url+mailid, true);
    httpr.send(null);
}

