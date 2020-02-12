var lgOutBtn = document.getElementById("logOut");
var allBtn = document.getElementById("allEmp");
var table = document.getElementById("adminTable");
var add = document.getElementById("addEmp");
var del = document.getElementById("delEmp");
var submit = document.getElementById("submitbtn");

window.onload = () => {
  if (typeof Storage !== "undefined") {
    var role = localStorage.getItem("Urole");
    console.log(role);

    if (role != null && role == "admin") {
      getAll();
    } else {
      console.log("There is no JwtToken present");
      window.location.href = "./index.html";
    }
  } else {
    alert("Sorry ! No local storage available.");
  }
};

//function for logout
const lgout = () => {
  if (typeof Storage !== "undefined") {
    localStorage.clear();
    window.alert("Sign In again to view your account!");
    window.location.href = "./index.html";
  } else {
    alert("Sorry ! No local storage available.");
  }
};

//function for getting a list of users from db
const getAll = () => {
  sendHTTPReq("POST", "https://localhost:44341/api/Admin/UsersList")
    .then(responseData => {
      json = responseData.response;
      if (json != null) {
        drawTable(json);
      } else {
        localStorage.removeItem("JwtTOKEN");
        window.alert("Token is expired! Please Login Again");
        window.location.href = "./index.html";
      }
    })
    .catch(err => {
      console.log(err);
    });
};

//function for creating table
function drawTable(json) {
  var colLength = 9;

  for (let j = 0; j < json.length; j++) {
    var x = json[j];
    var data = [
      j + 1,    //serial no
      x.EmpName,
      x.EmpEmail,
      x.EmpPhone,
      x.EmpGender,
      x.EmpJoning,
      x.EmpExp,
      x.EmpRole,
      x.EmpPm,
      x.empProject
    ];
    var row = table.insertRow(j);
    for (let i = 0; i < colLength; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = data[i];
    }
  }
}

const sendHTTPReq = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = () => {
      resolve(xhr);
    };
    xhr.onerror = () => {
      reject("Something went wrong");
    };
    xhr.send(null);
  });

  return promise;
};

//add new row to table
function addRow() {
  var empTab = document.getElementById("adminTable");

  var rowCnt = empTab.rows.length; // table row count
  var tr = empTab.insertRow(rowCnt);

  for (var c = 0; c < 10; c++) {
    var td = document.createElement("td");
    td = tr.insertCell(c);

    // create and add textboxes
    var ele = document.createElement("input");
    if (c == 0) {       //auto-increment serial no
      ele.setAttribute("type", "number");
      ele.readOnly = true;
      ele.setAttribute("value", rowCnt + 1);
    } else {
      ele.setAttribute("type", "text");
      ele.setAttribute("value", "");
    }
    td.appendChild(ele);
  }
}

// submit table data
function submitData() {
  var myTab = document.getElementById("adminTable");
  var values = new Array();

  // LOOP THROUGH EACH ROW OF THE TABLE.
  for (row = 1; row < myTab.rows.length - 1; row++) {
    for (c = 0; c < myTab.rows[row].cells.length; c++) {
      // EACH CELL IN A ROW.
      var element = myTab.rows.item(row).cells[c];
      if (element.childNodes[0].getAttribute("type") == "text") {
        values.push("'" + element.childNodes[0].value + "'");
      }
    }
  }
}

//for delete request
const deleteEmp = () => {
  del.removeEventListener("click", deleteEmp);  //disabling delete button after click
  var user = getInput("Enter email id you want to delete");
  if (user != null) {
    url = "https://localhost:44341/api/Admin/" + user;
    sendHTTPReq("DELETE", url).then(responseData => {
      if (responseData.status == 200) {
        alert("User Deleted");
        getAll();
        del.addEventListener("click", deleteEmployee);
      } else {
        alert("Some Error Occured " + responseData.status);
      }
    });
  }
};

function getInput(msg) {
  var inputvalue = prompt(msg);
  return inputvalue;
}

//adding event listeners to all buttons
lgOutBtn.addEventListener("click", lgout);
allBtn.addEventListener("click", getAll);
add.addEventListener("click", addRow);
del.addEventListener("click", deleteEmp);
submit.addEventListener("click", submitData);
