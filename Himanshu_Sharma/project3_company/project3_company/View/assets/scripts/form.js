let accessToken = sessionStorage.getItem("accessToken");

let data = parseJwt(accessToken);
let refactoredData = {
  id: parseInt(data.id),
  role: data.role,
  email: data.email,
  name: data.name
};

let inputElements = [
    "first_name",
    "last_name",
    "email",
    "mobile",
    "role",
    "manager",
    "project"
];

uiUpdateAccordingToRolesAndState();

//functions
function uiUpdateAccordingToRolesAndState(){
    console.log(sessionStorage.getItem("state"));
    if(sessionStorage.getItem("state") === "read"){
        document.querySelector('.submit-btn').classList.add('hide');
        document.querySelector('.btn-addproject').classList.add('hide');
        document.querySelector('.project').classList.add('hide');

        inputElements.forEach((cur) => {
            console.log(cur);
            if(cur === "role"){
                document.querySelector(`.${cur}`).setAttribute('disabled', 'true');
                return;
            }   
            document.querySelector(`.${cur}`).setAttribute('readonly', 'true');
        });
    }

    if(sessionStorage.getItem("state") === "update"){
        if(sessionStorage.getItem("role") !== "Admin"){
            document.querySelector('.projects-parent').classList.add('hide');
            document.querySelector('.manager-parent').classList.add('hide');
            document.querySelector('.role-parent').classList.add('hide');
        }
    }

    document.querySelector('.logout-btn').textContent = `Logout ${refactoredData.name}`;
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
