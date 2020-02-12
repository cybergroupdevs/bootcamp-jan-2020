function adminGet(){}

    fetch('https://localhost:51391/api/get')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data)
{
    var users = document.getElementById("users");
    console.log(users);

    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].name + "Email :" + data[i].email + "Password :" + data[i].password + "ContactNo :" + data[i].contactno;
        users.appendChild(div);
    }
}


   
