let accessToken = sessionStorage.getItem("accessToken");

let data = parseJwt(accessToken);
let refactoredData = {
  role: data.role,
  email: data.email,
  name: data.name
};

let employeeList;

requestToApi();

//Functions
function uiUpdateAccordingToRoles() {
  var newhtml;
  var html = `
    <li class="list-group-item list-group-item-success">
    <ul class="employee-details list-group list-group-horizontal row">
      <li class="employee-details__id list-group-item col-sm-auto mr-2">%index%</li>
      <li class="employee-details__name list-group-item col-sm-auto mr-2">%name%</li>
      <li class="employee-details__email list-group-item col-sm-auto mr-2">
        %email%
      </li>
      <li class="employee-details__role list-group-item col-sm-auto mr-2">%role%</li>
    </ul>
    <div class="button-group float-right">
      <button type="button" class="btn btn-info btn--read">Read</button>
      <button type="button" class="btn btn-secondary btn--update">Update</button>
      <button type="button" class="btn btn-danger btn--delete">Delete</button>
    </div>
  </li>
    `;

  if (employeeList !== "") {
    var employeeListObj = JSON.parse(employeeList);
    console.log(employeeListObj);
  }

  if (Array.isArray(employeeListObj)) {
    employeeListObj.forEach((cur, index) => {
      newhtml = html.replace("%index%", index + 1);
      newhtml = newhtml.replace("%name%", `${cur.firstName} ${cur.lastName}`);
      newhtml = newhtml.replace("%email%", cur.email);
      newhtml = newhtml.replace("%role%", cur.role);

      console.log(newhtml);

      document
        .querySelector(".list-group")
        .insertAdjacentHTML("beforeend", newhtml);
    });
  }

  if (refactoredData.role === "Admin") {
    document.querySelector(".btn-create").classList.toggle("hide");
  }

  document.querySelector(
    ".logout-btn"
  ).textContent = `Logout ${refactoredData.name}`;

  document.querySelector(".btn--read").addEventListener("click", (e) => {
    sessionStorage.setItem("state", "read");
    let email = e.target.parentNode.parentNode.firstElementChild.children[2].textContent;
    sessionStorage.setItem("email", email);
    window.location.href = "form.html";
  });

  document.querySelector(".btn--update").addEventListener("click", () => {
    sessionStorage.setItem("state", "update");
    window.location.href = "form.html";
  });

  document.querySelector(".btn--delete").addEventListener("click", () => {
    sessionStorage.setItem("state", "delete");
    window.location.href = "form.html";
  });

  document.querySelector(".btn-create").addEventListener("click", () => {
    sessionStorage.setItem("state", "create");
    window.location.href = "form.html";
  });
}

function requestToApi() {
  const http = new XMLHttpRequest();
  const url = "http://localhost:49228/api/home";

  http.open("POST", url);
  http.setRequestHeader("Content-type", "application/json");

  console.log(JSON.stringify(refactoredData));

  http.send(JSON.stringify(refactoredData));

  http.onprogress = () => {
    console.log(http.response);
    employeeList = http.response;
    console.log(
      employeeList,
      "Main onreadystatechange mein hoon!! employeeList",
      http.response,
      "http.response"
    );
    uiUpdateAccordingToRoles();
  };
}

function parseJwt(token) {
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
