function testFunction() {
    api();
    printTable();
}

function parseJwt (jwtToken) {
    var base64Url = jwtToken.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);

};

function api(){
    const xhr = new XMLHttpRequest();
    const url = "http://localhost:4000/employees";
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
        let empDetail = xhr.response;
        console.log(empDetail);
        console.log(typeof(empDetail));
        printTable(empDetail);     
    };
    xhr.onerror = (err) =>{
        console.log(err);
    };
    xhr.send();
}

function printTable(empDetail){

    var columnLength = 10;
    for(let j=0; j<empDetail.length; j++){
        var empJson = empDetail[j];
        var data = [j+1, empJson.email, empJson.fName, empJson.lName, empJson.designation, empJson.project, empJson.manager, j];
        var row = table.insertRow(j);        
        for(let i=0; i<columnLength; i++){
            var cell = row.insertCell(i);
            cell.innerHTML = data[i];
        }
    }
    
}


