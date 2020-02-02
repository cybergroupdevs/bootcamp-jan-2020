var singUpObj = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  mobile: ""
};

document.getElementById("signup-btn").addEventListener("click", () => {
  for (let key in singUpObj) {
    singUpObj[key] = document.getElementById(key).value.trim();
  }
  console.log(singUpObj);

  requestToApi();

  event.preventDefault();
});

requestToApi = () => {
  var { email, firstname, password } = singUpObj;

  if (
    email.trim().length >= 5 &&
    firstname.trim().length >= 2 &&
    password.trim().length >= 6
  ) {
    const http = new XMLHttpRequest();
    const url = "http://localhost:49228/api/signup";

    http.open("POST", url);
    console.log(JSON.stringify(singUpObj));

    http.send(JSON.stringify(singUpObj));

    http.onreadystatechange = e => {
      console.log(http.responseText);
    };
  }
};
