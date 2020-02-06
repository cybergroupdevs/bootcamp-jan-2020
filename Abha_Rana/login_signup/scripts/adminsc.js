let accesstoken=localStorage.getItem("JWTtoken");
//document.getElementById("add__new__list").addEventListener("click", addUser);
let data = DecodeToken(accesstoken);
let obj = {
  Role: data.Role,
  Username: data.Username
};


function drawTable()
{
  var xhr = new XMLHttpRequest();
  var url="https://localhost:44352/api/data";
  xhr.open("GET", url,true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
  xhr.onload = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var userdata=JSON.parse(xhr.response);
      console.log(userdata);
  var table = document.getElementById("empTable");
       for(let i=0; i<userdata.length; i++){
        let tr = document.createElement("tr");
        
        var x = userdata[i];
        console.log(x);
        
        var a = document.createTextNode(i+1);
        var b = document.createTextNode(x.name);
        var c = document.createTextNode(x.username);
        var d = document.createTextNode(x.phone);
        var e = document.createTextNode(x.role);
        var f = document.createTextNode(x.email);
        var g = document.createTextNode(x.address);
        var h = document.createTextNode(x.project);
        // var f = document.createElement("select");
        // var o1 = document.createElement("option");
        // o1.text = "PROJECT MANAGER"
        // var o2 = document.createElement("option");
        // o2.text = "ADMIN";
        
        //f.appendChild(o1);
        //f.appendChild(o2);

        //f.style.display = "flex";

        let indx = document.createElement("td");
        let nm = document.createElement("td");
        let usn = document.createElement("td");
        let ph = document.createElement("td");
        let rl = document.createElement("td");
        let em = document.createElement("td");
        let ad = document.createElement("td");
        let pr=  document.createElement("td");

        indx.appendChild(a);
        nm.appendChild(b);
        usn.appendChild(c);
        ph.appendChild(d);
        rl.appendChild(e);
        em.appendChild(f);
        ad.appendChild(g);
        pr.appendChild(h);

        tr.appendChild(indx);
        tr.appendChild(nm);
        tr.appendChild(usn);
        tr.appendChild(ph);
        tr.appendChild(rl);
        tr.appendChild(em);
        tr.appendChild(ad);
        tr.appendChild(pr);
        
        table.appendChild(tr);
    
}
}
}
}
function DecodeToken(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  console.log(jsonPayload);
  var obj = JSON.parse(jsonPayload);
  console.log(obj.Username);
  return JSON.parse(jsonPayload);
    }
    
const jsonDecoder = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  
  return JSON.parse(jsonPayload);
};

window.onload = () => {
  //document.getElementById("empRole").style.display = "none";
  if (typeof(Storage) !== "undefined") {
      const token = localStorage.getItem("JWTtoken");
      if(token != null){
          var jsonPayload = jsonDecoder(token);
          console.log(jsonPayload)
         // document.getElementById("userName").innerHTML = jsonPayload.Username;
          drawTable();
      }
      else{
          console.log("There is no JwtToken present");
          window.location.href = "./index.html";
      }
  } 
  else {
      alert("Sorry ! Your browser is not cool.");
  }
}

const lgout = () => {
  if (typeof(Storage) !== "undefined") {
      localStorage.removeItem("JwtTOKEN");
      console.log("something is not working");
      window.location.href = "./index.html";
  } else {
      // Sorry! No Web Storage support..
      alert("Sorry ! Your browser is not cool.");
  }
}
const viewdetails = () => {
  window.location.href="profile.html";
  
}

document.getElementById("logOut").addEventListener('click', lgout);
document.getElementById("profile").addEventListener('click', viewdetails);

/*const sendHTTPReq = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      console.log(JSON.stringify(data));
      xhr.responseType = 'json';
      if(data){
          xhr.setRequestHeader('Content-Type', 'application/json');
      }
      xhr.onload = () => {
          //resolve(xhr.status + "--Token--"+xhr.response.token);
          resolve(xhr);
      };
      xhr.onerror = () => {
          reject('Something went wrong');
      }
      xhr.send(JSON.stringify(data));
  });
  return promise;
}


const getAll = () => {
  sendHTTPReq('GET', "https://localhost:44305/api/Admin")
  .then((responseData) => {
      // console.log(responseData.response);
      json = responseData.response;
      drawTable(json);
  })
  .catch(err => {
      console.log(err);
  });
};

// drawTable(json);

//allBtn.addEventListener('click', getAll);


/*let accesstoken=localStorage.getItem("JWTtoken");
let data= DecodeToken(accesstoken);

function DecodeToken(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  console.log(jsonPayload);
  var obj = JSON.parse(jsonPayload);
  console.log(obj.Username);
  return JSON.parse(jsonPayload);
  var empTab = document.getElementById('empTable');
      var rowCnt = userdata.length; 
      var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
      tr = empTab.insertRow(rowCnt);
      empTab.appendChild(tr);
      for (var c = 0; c < userdata[c].length; c++) {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);
        empTab.append(td);
*/
/*let userList=hitApi();

//Functions
function UpdateView() {
    var newhtml;
  var html = `
    <li class="list-group-item list-group-item-success">
    <ul class="employee-details list-group list-group-horizontal row">
      <li class="employee-details__id list-group-item col-sm-auto mr-2">%index%</li>
      <li class="employee-details__name list-group-item col-sm-auto mr-2">%Name%</li>
      <li class="employee-details__email list-group-item col-sm-auto mr-2"> %Email%</li>
      <li class="employee-details__role list-group-item col-sm-auto mr-2">%Role%</li>
    </ul>
    <div class="button-group float-right">
      <button type="button" class="btn btn-info">Read</button>
      <button type="button" class="btn btn-secondary">Update</button>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </li>
    `;

    if(userList !== ''){
        var employeeListObj = JSON.parse(userList);
        console.log(employeeListObj);
    }

    if(Array.isArray(employeeListObj)){
        employeeListObj.forEach((cur, index) => {
            newhtml = html.replace('%index%', index+1);
            newhtml = newhtml.replace('%Name%', `${cur.Name}`);
            newhtml = newhtml.replace('%Email%', cur.Email);
            newhtml = newhtml.replace('%Role%', cur.Role);

            console.log(newhtml);
    
            document.querySelector('.list-group').insertAdjacentHTML("beforeend", newhtml);
        });
    }
    

  if (userdata.role === "Admin") {
    document.querySelector(".btn-create").classList.toggle("hide");
  }

  document.querySelector(".logout-btn").textContent = `Logout ${userata.Username}`;
}

function hitApi() {
  const http = new XMLHttpRequest();
  const url = "https://localhost:44352/api/data";

  http.open("GET", url);
  http.setRequestHeader("Content-type", "application/json");

  //console.log(JSON.stringify(userata));

  http.send();

  http.onprogress = () => {
    console.log(http.response);
    employeeList = http.response;
    console.log(
      employeeList,
       "onreadystatechange userList",
      http.response, 'http.response'
    );
    UpdateView();
  };
}

function DecodeToken(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}


<tbody>
 <tr>
   <th scope="row">1</th>
   <td>Mark</td>
   <td>Otto</td>
   <td>
       <a class="btn btn-sm btn-primary" href="#"><i class="far fa-edit"></i> edit</a>
       <a class="btn btn-sm btn-danger" href="#"><i class="fas fa-trash-alt"></i> delete</a>    
   </td>
   <td><a class="btn btn-sm btn-info" href="#"><i class="fas fa-info-circle"></i> Details</a> </td>
 </tr>
 <tr>
   <th scope="row">2</th>
   <td>Jacob</td>
   <td>Thornton</td>
   <td>
       <a class="btn btn-sm btn-primary" href="#"><i class="far fa-edit"></i> edit</a>
       <a class="btn btn-sm btn-danger" href="#"><i class="fas fa-trash-alt"></i> delete</a>    
   </td>
   <td><a class="btn btn-sm btn-info" href="#"><i class="fas fa-info-circle"></i> Details</a> </td>
 </tr>
 <tr>
   <th scope="row">3</th>
   <td colspan="2">Larry the Bird</td>
   <td>       
       <a class="btn btn-sm btn-primary" href="#"><i class="far fa-edit"></i> edit</a>
       <a class="btn btn-sm btn-danger" href="#"><i class="fas fa-trash-alt"></i> delete</a> 
   </td>
   <td><a class="btn btn-sm btn-info" href="#"><i class="fas fa-info-circle"></i> Details</a> </td>
 </tr>
</tbody>*/