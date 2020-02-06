
function sendJSON()
{
    // let url  = "https://localhost:44371/api/signup";
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() { 
    //     if (xhr.readyState == 4 && xhr.status == 200)
    //     {
    //         // console.log(xhr.responseText);
    //         var data =  xhr.responseText
    //         // console.log(JSON.stringify(data))
    //         return data;
    //     }
    // }
    // xhr.open("GET", url, true); // true for asynchronous 
    // xhr.send(null);

    // // console.log(xhr.responseText);

    // var data = xhr.onreadystatechange();
    // console.log(data)

    fetch('https://localhost:44371/api/signup')
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
    // var table = document.createElement("TABLE");

    for (var i = 0; i < data.length; i++) {
      var object = data[i];
      var arrayOfKeys = Object.keys(object)

      var tr = document.createElement("TR");
      tr.setAttribute("id", `tr${i}`);

      for (var j = 0; j < data[i].length; i++){
        var td = document.createElement("TD");
        td.innerHTML = data[i].arrayOfKeys[j];
        document.getElementById(`tr${i}`).appendChild(td);
      }
      document.getElementById("myTable").appendChild(tr);
        
        
    }
}


    // event.preventDefault();
}