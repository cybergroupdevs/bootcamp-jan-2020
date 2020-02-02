var loginObj = {
  email: "",
  password: ""
};

document.querySelector(".login-btn").addEventListener("click", () => {
  for (let key in loginObj) {
    loginObj[key] = document.getElementById(key).value.trim();
  }
  console.log(loginObj);

  requestToApi();

  event.preventDefault();
});

requestToApi = () => {
  var { email, password } = loginObj;

  if (email.trim().length >= 5 && password.trim().length >= 6) {
    const http = new XMLHttpRequest();
    const url = "http://localhost:49228/api/login";

    http.open("POST", url);
    http.setRequestHeader("Content-type", "application/json");

    console.log(JSON.stringify(loginObj));

    http.send(JSON.stringify(loginObj));

    http.onreadystatechange = e => {
      console.log(http);
      if (http.status === 401) {
        document.querySelector(".toast-body").textContent =
          "Please sign up or enter correct credentials";
      } else {
        document.querySelector(".toast-body").textContent =
          "Signed In Successfully";
        window.location.href = "home.html";
      }
      console.log(http.responseText);
      $(".toast").toast("show");
    };
  } else {
    document.querySelector(".toast-body").textContent =
      "Fill details correctly";
    $(".toast").toast("show");
  }
};
